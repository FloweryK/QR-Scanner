import React from 'react';
import {RNCamera} from 'react-native-camera';

const Scanner = props => {
  const {BarcodeDetected, style} = props;

  let camera;

  return (
    <RNCamera
      ref={ref => (camera = ref)}
      type={RNCamera.Constants.Type.back}
      captureAudio={false}
      onGoogleVisionBarcodesDetected={BarcodeDetected}
      style={style}
    />
  );
};

export default Scanner;
