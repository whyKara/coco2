import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './app/screens/Login'
import ChatbotScreen from './app/screens/Chatbot'
import AnonymousVoiceTherapy from './app/screens/AnonymousVoiceTherapy';
import Blog from './app/screens/Blog';
import Community from './app/screens/Community';
import Journal from './app/screens/Journal';
import MeditationMusic from './app/screens/MeditationMusic';
import MoodTracker from './app/screens/MoodTracker';
import AvailableTherapist from './app/screens/AvailableTherapist';
import Dashboard from './app/screens/Dashboard';
import Navigator from "./app/navigation/index"
import {
  AuthenticationContext,
  AuthenticationContextProvider
} from "./app/context/authentication.context";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <AuthenticationContextProvider>
        <Navigator />
      </AuthenticationContextProvider>
    </SafeAreaView>
  )
}

export default App;