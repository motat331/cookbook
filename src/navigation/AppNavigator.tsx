import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { AuthNavigator } from './AuthNavigator';
import StartupScreen from '../screens/StartupScreen';
import { TabsNavigator } from './TabsNavigator';
import { RootState } from '../state/Store';

const AppNavigator = (props: any) => {
    const isAuth = useSelector((state: RootState) => !!state.auth.id);
    const didTryAutoLogin = useSelector(
        (state: RootState) => state.auth.didTryAutoLogin
    );

    console.log('Is Auth -> ', isAuth);

    return (
        <NavigationContainer>
            {/* <StartupScreen /> */}
            {isAuth && <TabsNavigator />}
            {!isAuth && didTryAutoLogin && <AuthNavigator />}
            {!isAuth && !didTryAutoLogin && <StartupScreen />}
        </NavigationContainer>
    );
};

export default AppNavigator;
