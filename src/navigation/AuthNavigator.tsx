import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen, {
    screenOptions as authScreenOptions,
} from '../screens/AuthScreen';
import StartupScreen from '../screens/StartupScreen';

const StartScreenStackNavigator = createStackNavigator();
const AuthStackNavigator = createStackNavigator();

export const StartScreenNavigator = () => {
    return (
        <StartScreenStackNavigator.Navigator>
            <StartScreenStackNavigator.Screen
                name="StartupScreen"
                component={StartupScreen}
            />
        </StartScreenStackNavigator.Navigator>
    );
};

export const AuthNavigator = () => {
    return (
        <AuthStackNavigator.Navigator>
            <AuthStackNavigator.Screen
                name="Auth"
                component={AuthScreen}
                options={authScreenOptions}
            />
        </AuthStackNavigator.Navigator>
    );
};
