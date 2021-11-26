import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import QRCodeGenerator from '../utils/QRCodeGenerator';

const GenerateScreen = () => {
  // info for QR code
  const [value, setValue] = useState('안녕하세요 :)');

  const onChange = event => {
    const {text} = event.nativeEvent;
    setValue(text);
  };

  return (
    <View>
      <QRCodeGenerator value={value} />
      <TextInput value={value} onChange={onChange} style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: 'black',
  },
});

export default GenerateScreen;
