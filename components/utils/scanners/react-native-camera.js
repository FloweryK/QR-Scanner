import React from 'react';
import {RNCamera} from 'react-native-camera';

const QRScanner = props => {
  // camera ref
  let camera;

  // props
  const {setQrList, style} = props;

  // action after barcodes are detected
  const QRDetected = ({barcodes}) => {
    const newQrList = barcodes.map(barcode => barcode.data);
    setQrList(newQrList);
  };

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
