import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppButton } from '../components/UI/AppButton';
import Colors from '../constants/Colors';
import * as authActions from '../state/actions/auth';

const ProfileScreen = (props: any) => {
    const dispatch: any = useDispatch();

    const logout = async () => dispatch(authActions.logout());

    return (
        <View style={styles.screen}>
            <AppButton text="Logout" onPress={logout} />
        </View>
    );
};

export const screenOptions = (navData: any) => {
    return {
        headerTitle: 'Settings',
        headerStyle: {
            backgroundColor: Colors.background,
        },
        headerTintColor: 'white',
    };
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.background,
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
});

export default ProfileScreen;
