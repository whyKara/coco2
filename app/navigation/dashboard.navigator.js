import React from "react";

import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import Questions from "../screens/Questions";
import Questions2 from "../screens/Questions2";
import Questions3 from "../screens/Questions3";
import Questions4 from "../screens/Questions4";
import { Music } from "../screens/Music";
import { Music2 } from "../screens/Music2";
import { Music3 } from "../screens/Music3";

const DashboardStack = createStackNavigator();
export const DashboardNavigator = () => {
    return (
        <DashboardStack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false
            }}
        >
            <DashboardStack.Screen
                options={{
                    header: () => null
                }}
                name="Dashboard"
                component={Dashboard}
            />
            <DashboardStack.Screen name="Questions" component={Questions} options={{ title: 'Questions' }} />
            <DashboardStack.Screen name="Questions2" component={Questions2} options={{ title: 'Questions2' }} />
            <DashboardStack.Screen name="Questions3" component={Questions3} options={{ title: 'Questions3' }} />
            <DashboardStack.Screen name="Questions4" component={Questions4} options={{ title: 'Questions4' }} />
            <DashboardStack.Screen name="Music" component={Music} options={{ title: 'Music' }} />
            <DashboardStack.Screen name="Music2" component={Music2} options={{ title: 'Music2' }} />
            <DashboardStack.Screen name="Music3" component={Music3} options={{ title: 'Music3' }} />
        </DashboardStack.Navigator>
    );
};