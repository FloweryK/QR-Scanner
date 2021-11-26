import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BarcodeScanner from '../utils/BarcodeScanner';

const ScanScreen = () => {
  // camera reference
  let camera;

  // detected QR code list
  const [qrList, setQrList] = useState([]);

  const BarcodeDetected = ({barcodes}) => {
    const newQrList = barcodes.map(barcode => barcode.data);
    setQrList(newQrList);
  };

  return (
    <View>
      <BarcodeScanner BarcodeDetected={BarcodeDetected} style={styles.image} />
      <Text style={styles.text}>QR Detected:</Text>
      {qrList.map(qr => (
        <Text style={styles.text}>{qr}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 400,
  },
  text: {
    color: 'black',
  },
});

export default ScanScreen;
