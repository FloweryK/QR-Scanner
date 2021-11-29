import React from 'react';
import {RNCamera} from 'react-native-camera';

const QRScanner = props => {
  const {QRDetected, style} = props;

  let camera;

  return (
    <RNCamera
      ref={ref => (camera = ref)}
      type={RNCamera.Constants.Type.back}
      captureAudio={false}
      onGoogleVisionBarcodesDetected={QRDetected}
      style={style}
    />
  );
};

export default QRScanner;
