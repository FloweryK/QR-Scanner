import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/screens/HomeScreen';
import ScanScreen from './components/screens/ScanScreen';
import GenerateScreen from './components/screens/GenerateScreen';

const App = () => {
  // Navigator stack
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Generate" component={GenerateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
