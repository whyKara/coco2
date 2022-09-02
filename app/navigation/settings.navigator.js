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

import { Music } from '../screens/Music';

import { GettingStarted } from '../screens/GettingStarted';
import { ChooseTopic } from '../screens/ChooseTopic';
import { Reminders } from '../screens/Reminders';
import { Home } from '../screens/Home';
import { CourseDetails } from '../screens/CourseDetails';
import { Meditate } from '../screens/Meditate';
import Questions from "../screens/Questions";
import MusicDemo from "../screens/MusicDemo";
import ChatbotDemo from "../screens/ChatbotDemo";
import UpdateDetails from "../screens/UpdateDetails";

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
            <SettingsStack.Screen name="Questions" component={Questions} options={{ title: 'Questions' }} />
            <SettingsStack.Screen name="Music" component={Music} options={{ title: 'Music' }} />
            <SettingsStack.Screen name="GettingStarted" component={GettingStarted} options={{ title: 'GettingStarted' }} />
            <SettingsStack.Screen name="ChooseTopic" component={ChooseTopic} options={{ title: 'ChooseTopic' }} />
            <SettingsStack.Screen name="Reminders" component={Reminders} options={{ title: 'Reminders' }} />
            <SettingsStack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
            <SettingsStack.Screen name="CourseDetails" component={CourseDetails} options={{ title: 'CourseDetails' }} />
            <SettingsStack.Screen name="Meditate" component={Meditate} options={{ title: 'Meditate' }} />
            <SettingsStack.Screen name="MusicDemo" component={MusicDemo} options={{ title: 'MusicDemo' }} />
            <SettingsStack.Screen name="ChatbotDemo" component={ChatbotDemo} options={{ title: 'ChatbotDemo' }} />
            <SettingsStack.Screen name="UpdateDetails" component={UpdateDetails} options={{ title: 'UpdateDetails' }} />
        </SettingsStack.Navigator>
    );
};