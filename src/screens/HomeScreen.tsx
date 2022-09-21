import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Colors from '../constants/Colors';

const HomeScreen = (props: any) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.screen}>
            <Text>Home Screen</Text>
        </View>
    );
};

export const screenOptions = (navData: any) => {
    return {
        headerTitle: 'Home Page',
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
    },
});

export default HomeScreen;
