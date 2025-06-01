import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoIRViewProps } from './ExpoIR.types';

const NativeView: React.ComponentType<ExpoIRViewProps> =
  requireNativeView('ExpoIR');

export default function ExpoIRView(props: ExpoIRViewProps) {
  return <NativeView {...props} />;
}
