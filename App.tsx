import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import Store from './src/state/Store';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from './src/constants/Colors';

export default function App() {
    return (
        <Provider store={Store}>
            <StatusBar backgroundColor={Colors.background} style="light" />
            <SafeAreaView style={{ flex: 1 }}>
                <AppNavigator />
            </SafeAreaView>
        </Provider>
    );
}
