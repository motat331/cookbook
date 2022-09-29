import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen, {
    screenOptions as homeScreenOptions,
} from '../screens/HomeScreen';
import ProfileScreen, {
    screenOptions as profileScreenOptions,
} from '../screens/ProfileScreen';
import RecipeScreen, {
    screenOptions as recipeScreenOptions,
} from '../screens/RecipeScreen';

const Tabs = createMaterialBottomTabNavigator();
const HomeStackNavigator = createStackNavigator();
const ProfileStackNavigator = createStackNavigator();
const RecipesStackNavigator = createStackNavigator();

export const TabsNavigator = () => {
    return (
        <Tabs.Navigator
            barStyle={{ backgroundColor: '#202020' }}
            labeled={false}
        >
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
                name="Add"
                component={HomeNavigatorScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name={'add-box'} size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Recipe"
                component={RecipeNavigationScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name={'view-stream'} size={24} color={color} />
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
            <RecipesStackNavigator.Screen
                name="RecipeScreen"
                component={RecipeScreen}
                options={recipeScreenOptions}
            />
        </HomeStackNavigator.Navigator>
    );
};

export const RecipeNavigationScreen = () => {
    return (
        <ProfileStackNavigator.Navigator >
            <ProfileStackNavigator.Screen
                name="RecipeScreen"
                component={RecipeScreen}
                options={recipeScreenOptions}
            />
        </ProfileStackNavigator.Navigator>
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
