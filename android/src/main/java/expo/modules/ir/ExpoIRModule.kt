package expo.modules.ir

import android.content.Context
import android.hardware.ConsumerIrManager
import expo.modules.kotlin.exception.Exceptions
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoIRModule : Module() {
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    Name("ExpoIR")

    // Initialize ConsumerIrManager if not initialized then check device has IR emitter
    Function("isSupporting") {
      initIRManager()

      return@Function mCIR?.hasIrEmitter() ?: false
    }

    Function("transmit") { frequency: Int, pattern: IntArray ->
      initIRManager()

      mCIR?.transmit(frequency, pattern)
    }
  }

  private val context: Context
    get() = appContext.reactContext ?: throw Exceptions.ReactContextLost()

  var mCIR: ConsumerIrManager? = null

  fun initIRManager() {
    if (mCIR == null) {
      mCIR =
              context.applicationContext.getSystemService(Context.CONSUMER_IR_SERVICE) as
                      ConsumerIrManager
    }
  }

  fun hex2dec(IRData: String): IntArray {
    val parts = IRData.split(" ")
    if (parts.size < 4) return intArrayOf()

    // parts[1] is the frequency in hex; parts[0], parts[2], parts[3] are to be skipped
    val frequency = parts[1].toInt(16)

    val dataInts = parts.drop(4).map { it.toInt(16) }.toIntArray()

    val recalculatedFreq = (1_000_000 / (frequency * 0.241246)).toInt()

    return intArrayOf(recalculatedFreq).plus(dataInts)
  }
}
