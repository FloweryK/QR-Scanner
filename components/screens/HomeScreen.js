import React from 'react';
import {Button, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  const onPressScan = () => {
    navigation.navigate('Scan');
  };

  const onPressGenerate = () => {
    navigation.navigate('Generate');
  };

  return (
    <View>
      <Button title="QR Scan" onPress={onPressScan} />
      <Button title="QR Generate" onPress={onPressGenerate} />
    </View>
  );
};

export default HomeScreen;
