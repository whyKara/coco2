import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import LoginScreen from './app/screens/Login'
import ChatbotScreen from './app/screens/Chatbot'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }}
          />
          <Stack.Screen name="ChatbotScreen" component={ChatbotScreen} options={{ title: 'Chat Room' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App;