import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

const App = () => {
  // camera reference
  let camera;

  // for QR scanner
  const [qrList, setQrList] = useState([]);

  const BarcodeDetected = ({barcodes}) => {
    const newQrList = barcodes.map(barcode => barcode.data);
    setQrList(newQrList);
  };

  return (
    <View>
      <RNCamera
        ref={ref => (camera = ref)}
        style={styles.image}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        onGoogleVisionBarcodesDetected={BarcodeDetected}
      />
      <Text>QR Detected: {qrList}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 600,
  },
});

export default App;
