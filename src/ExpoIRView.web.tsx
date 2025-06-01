import * as React from 'react';

import { ExpoIRViewProps } from './ExpoIR.types';

export default function ExpoIRView(props: ExpoIRViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
