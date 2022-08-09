import { View, Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react'
import ChatbotScreen from '../screens/Chatbot';
import Dashboard from '../screens/Dashboard';
import { SettingsNavigator } from './settings.navigator';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    ChatbotIcon: "message-settings-outline",
    DashboardIcon: "view-dashboard-outline",
    SettingsIcon: "md-settings"
};


const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        headerShown: false,
        tabBarIcon: ({ size, color }) => <AwesomeIcon name={iconName} size={size} color={color} />,
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'orange'
        },
        tabBarActiveTintColor: 'red',
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
        <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="ChatbotScreen" component={ChatbotScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
    )
}

export default AppNavigator