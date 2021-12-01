import React from 'react';
import QRCode from 'react-native-qrcode-svg';

const QRGenerator = props => {
  return (
    <QRCode
      value={props.value}
      size={250}
      quietZone={30}
      backgroundColor="black"
      enableLinearGradient={true}
      logo={require('../../src/logo.png')}
      logoSize={50}
      linearGradient={['rgb(255,255,0)', 'rgb(0,255,255)']}
      gradientDirection={[170, 0, 30, 0]}
    />
  );
};

export default QRGenerator;
