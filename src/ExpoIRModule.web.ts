import { registerWebModule, NativeModule } from 'expo';

import { ExpoIRModuleEvents } from './ExpoIR.types';

class ExpoIRModule extends NativeModule<ExpoIRModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoIRModule, 'ExpoIRModule');
