// Reexport the native module. On web, it will be resolved to ExpoIRModule.web.ts
// and on native platforms to ExpoIRModule.ts
export { default } from './ExpoIRModule';

import ExpoIRModule from './ExpoIRModule';

export function isSupporting(): boolean {
    return ExpoIRModule.isSupporting();
}

export function transmit(frequency: number, pattern: Array<number>) {
    ExpoIRModule.transmit(frequency, pattern);
}
