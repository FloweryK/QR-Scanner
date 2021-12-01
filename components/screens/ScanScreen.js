import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import QRScanner from '../utils/scanners/react-native-camera';

const ScanScreen = () => {
  // detected QR code list
  const [qrList, setQrList] = useState([]);

  return (
    <View style={styles.container}>
      <QRScanner setQrList={setQrList} style={styles.image} />
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
  image: {
    width: 200,
    height: 400,
  },
  text: {
    color: 'black',
  },
});

export default ScanScreen;
