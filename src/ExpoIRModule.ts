import { NativeModule, requireNativeModule } from 'expo';

type ExpoIRModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
};

type ChangeEventPayload = {
  value: string;
};

declare class ExpoIRModule extends NativeModule<ExpoIRModuleEvents> {
  isSupporting(): boolean
  transmit(frequency: number, pattern: Array<number>): void
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoIRModule>('ExpoIR');
