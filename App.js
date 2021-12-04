import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator1 from './Navigations/BottomTabNavigator1';
import LibreriaProvider from './Context/LibrosContext';


export default function App() {
  return (
    <LibreriaProvider>
      <NavigationContainer>
        <BottomTabNavigator1/>
      </NavigationContainer>
    </LibreriaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});