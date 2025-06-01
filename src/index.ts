// Reexport the native module. On web, it will be resolved to ExpoIRModule.web.ts
// and on native platforms to ExpoIRModule.ts
export { default } from './ExpoIRModule';
export { default as ExpoIRView } from './ExpoIRView';
export * from  './ExpoIR.types';
