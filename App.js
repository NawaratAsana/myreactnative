 import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';
import RootStack from './navigations/RootStack';
import { AuthContext, AuthContextProvider } from "./hooks/AuthContextProvider";


export default function App() {
  return (
    <AuthContextProvider>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  </AuthContextProvider>



  );
}
