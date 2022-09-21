import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../state/Hooks';
import * as authActions from '../state/actions/auth';
import userApi from '../api/UserService';

const StartupScreen = (props: any) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const tryLogin = async () => {
            const autoUser = await authActions.checkState();
            console.log('Auto User: ', autoUser);
            if (!autoUser) {
                dispatch(authActions.setDidTryAL());
                return;
            }
            const user = await userApi.getUser(autoUser.uid);
            if (user) {
                console.log('found User: ', user);
                dispatch(
                    authActions.authenticate(user.firebase_id, user.email)
                );
            } else {
                dispatch(authActions.logout());
            }
        };
        try {
            console.log('Test Startup');
            // dispatch(authActions.setDidTryAL());
            tryLogin();
        } catch (e) {
            console.log('Err -> ', e);
        }
    }, [dispatch]);
    return (
        <View style={styles.screen}>
            <Text>Test2</Text>
            {/* <ImageBackground
				source={require('../../assets/splash.png')}
				resizeMode="cover"
				style={styles.image}></ImageBackground> */}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default StartupScreen;
