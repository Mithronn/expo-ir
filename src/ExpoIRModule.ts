import { NativeModule, requireNativeModule } from 'expo';

import { ExpoIRModuleEvents } from './ExpoIR.types';

declare class ExpoIRModule extends NativeModule<ExpoIRModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoIRModule>('ExpoIR');
