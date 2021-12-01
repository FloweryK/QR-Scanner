import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
// import QRScanner from '../utils/scanners/react-native-camera';

const ScanScreen = () => {
  // camera ref
  let camera;

  // detected QR code list
  const [qrList, setQrList] = useState([]);

  // action after barcodes are detected
  const QRDetected = ({barcodes}) => {
    const newQrList = barcodes.map(barcode => barcode.data);
    setQrList(newQrList);
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref => (camera = ref)}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        onGoogleVisionBarcodesDetected={QRDetected}
        style={styles.scanner}
      />
      <Text style={styles.text}>QR Detected:</Text>
      {qrList.map(qr => (
        <Text style={styles.text}>{qr}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanner: {
    width: 200,
    height: 400,
  },
  text: {
    color: 'black',
  },
});

export default ScanScreen;
