import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from '../context/authentication.context';
import AppNavigator from './app.navigator';
import AccountNavigator from './account.navigator'
const Navigation = () => {
    const { loggedIn } = useContext(AuthenticationContext);
    return (
        <NavigationContainer>
            {loggedIn ? <AppNavigator /> : <AccountNavigator />}
        </NavigationContainer>
    )
}

export default Navigation