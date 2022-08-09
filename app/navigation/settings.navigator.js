import React from "react";

import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import Settings from "../screens/Settings";
import AnonymousVoiceTherapy from '../screens/AnonymousVoiceTherapy';
import Blog from '../screens/Blog';
import Community from '../screens/Community';
import Journal from '../screens/Journal';
import MeditationMusic from '../screens/MeditationMusic';
import MoodTracker from '../screens/MoodTracker';
import AvailableTherapist from '../screens/AvailableTherapist';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
    return (
        <SettingsStack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false
            }}
        >
            <SettingsStack.Screen
                options={{
                    header: () => null
                }}
                name="Settings"
                component={Settings}
            />
            <SettingsStack.Screen name="AnonymousVoiceTherapy" component={AnonymousVoiceTherapy} options={{ title: 'AnonymousVoiceTherapy' }} />
            <SettingsStack.Screen name="Blog" component={Blog} options={{ title: 'Blog' }} />
            <SettingsStack.Screen name="Community" component={Community} options={{ title: 'Community' }} />
            <SettingsStack.Screen name="Journal" component={Journal} options={{ title: 'Journal' }} />
            <SettingsStack.Screen name="MeditationMusic" component={MeditationMusic} options={{ title: 'MeditationMusic' }} />
            <SettingsStack.Screen name="MoodTracker" component={MoodTracker} options={{ title: 'MoodTracker' }} />
            <SettingsStack.Screen name="AvailableTherapist" component={AvailableTherapist} options={{ title: 'AvailableTherapist' }} />
        </SettingsStack.Navigator>
    );
};
