import React from 'react';
import QRCode from 'react-native-qrcode-svg';

const QRCodeGenerator = props => {
  return <QRCode value={props.value} />;
};

export default QRCodeGenerator;
