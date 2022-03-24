import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenOne from './src/Screens/ScreenOne';
import ScreenTwo from './src/Screens/ScreenTwo';

export default function App() {
  const Stack = createNativeStackNavigator();
  return <NavigationContainer>
  <Stack.Navigator initialRouteName='Home' screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name="Home"  component={ScreenOne}  />
    <Stack.Screen name="Login" component={ScreenTwo} />
  </Stack.Navigator>
</NavigationContainer>
}


