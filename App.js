import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BarcodeScanner from './components/RNCamera';

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
      <BarcodeScanner BarcodeDetected={BarcodeDetected} style={styles.image} />
      <Text>QR Detected:</Text>
      {qrList.map(qr => (
        <Text>{qr}</Text>
      ))}
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
