import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import QRGenerator from '../utils/generators/react-qr-code';

const GenerateScreen = () => {
  // info for QR code
  const [inputValue, setInputValue] = useState('안녕하세요 :)');
  const [qrValue, setQrValue] = useState(inputValue);

  const onChange = event => {
    const {text} = event.nativeEvent;
    if (text.length > 0) {
      setQrValue(text);
    } else {
      setQrValue('QR로 만들 텍스트가 없어요');
    }
    setInputValue(text);
  };

  return (
    <View>
      <QRGenerator value={qrValue} />
      <TextInput
        value={inputValue}
        onChange={onChange}
        style={styles.textInput}
      />
      <TextInput value={tmpText} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: 'black',
  },
});

export default GenerateScreen;
