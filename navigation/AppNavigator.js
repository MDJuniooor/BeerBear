import React from 'react';
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import MainDrawerNavigator from './MainDrawerNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SignInScreen from '../screens/SignInScreen';

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    Main: MainDrawerNavigator
  },
  {
    initialRouteName: "AuthLoading"
  }
);