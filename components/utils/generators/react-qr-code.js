import React from 'react';
import QRCode from 'react-qr-code';

const QRGenerator = props => {
  return <QRCode value={props.value} />;
};

export default QRGenerator;
