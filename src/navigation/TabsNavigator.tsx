import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen, {
    screenOptions as homeScreenOptions,
} from '../screens/HomeScreen';
import ProfileScreen, {
    screenOptions as profileScreenOptions,
} from '../screens/ProfileScreen';

const Tabs = createMaterialBottomTabNavigator();
const HomeStackNavigator = createStackNavigator();
const ProfileStackNavigator = createStackNavigator();

export const TabsNavigator = () => {
    return (
        <Tabs.Navigator barStyle={{ backgroundColor: '#000' }}>
            <Tabs.Screen
                name="Home"
                component={HomeNavigatorScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name={'home'} size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Settings"
                component={ProfileNavigatorScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name={'settings'} size={24} color={color} />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
};

export const HomeNavigatorScreen = () => {
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={homeScreenOptions}
            />
        </HomeStackNavigator.Navigator>
    );
};

export const ProfileNavigatorScreen = () => {
    return (
        <ProfileStackNavigator.Navigator>
            <ProfileStackNavigator.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={profileScreenOptions}
            />
        </ProfileStackNavigator.Navigator>
    );
};
