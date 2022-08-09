import { View, Text, Button } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AuthenticationContext } from "../context/authentication.context"
import { ActivityIndicator, Colors } from "react-native-paper";
import Journal from './Journal';
import ChatbotScreen from './Chatbot';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Dashboard = ({ route, navigation }) => {
    const { user, signOut } = useContext(AuthenticationContext);
    return (
        <>
            {user ? <View style={{ justifyContent: 'space-between', flex: 0.5, alignItems: 'center' }}>
                <Text style={{
                    color: "black", fontSize: 30, fontWeight: 'bold'
                }}> Welcome {user.displayName}</Text>
                <Button
                    title="Go to chatbot"
                    onPress={() => navigation.navigate('ChatbotScreen', {
                        name: user.displayName,
                        id: user.uid
                    })}
                />
                <Button onPress={() => signOut()} title={'Logout'} color="red" />
            </View>
                : <ActivityIndicator>
                    {" "}
                    animating={true} color={Colors.blue300}
                </ActivityIndicator>}
        </>
    )
}

export default Dashboard