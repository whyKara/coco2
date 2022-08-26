import { View, Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react'
import ChatbotScreen from '../screens/Chatbot';
import Dashboard from '../screens/Dashboard';
import { SettingsNavigator } from './settings.navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DashboardNavigator } from './dashboard.navigator';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    ChatbotScreen: 'comment',
    Dashboard: 'home',
    Settings: "cog"
};


const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    console.log(iconName);
    return {
        headerShown: false,
        tabBarIcon: ({ size, color }) => <Icon name={iconName} size={size} color={"#8E97FD"} />,
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'orange'
        },
        tabBarActiveTintColor: '#8E97FD',
        tabBarInactiveTintColor: 'blue',
        tabBarStyle: [
            {
                display: "flex"
            },
            null
        ]
    };
};
const AppNavigator = () => {
    return (
        <>
            <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Dashboard" component={DashboardNavigator} />
                <Tab.Screen name="ChatbotScreen" component={ChatbotScreen} />
                <Tab.Screen name="Settings" component={SettingsNavigator} />
            </Tab.Navigator>
        </>

    )
}

export default AppNavigator