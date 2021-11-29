import React from 'react';
import QRCode from 'react-native-qrcode-svg';

const QRGenerator = props => {
  return <QRCode value={props.value} />;
};

export default QRGenerator;
