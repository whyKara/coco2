import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Login"
const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
        </Stack.Navigator>
    )
}

export default AccountNavigator
