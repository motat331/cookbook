import React from 'react';
import { View, StyleSheet, Pressable, Image } from 'react-native';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RecipeScreen = (props: any) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.featuredImageContainer}>
                <Image
                    style={styles.featuredImage}
                    source={require('../../assets/images/items/cake.jpg')}
                />
            </View>
        </View>
    );
};

export const screenOptions = (navData: any) => {
    return {
        headerTitle: '',
        headerStyle: {
            backgroundColor: Colors.background,
        },
        headerShadowVisible: false,
        headerTintColor: 'white',
        headerLeft: () => (
            <Pressable
                onPress={() => {
                    navData.navigation.goBack();
                }}
                style={styles.backButtonContainer}
            >
                <View style={styles.backButton}>
                    <Icon
                        style={styles.backButtonIcon}
                        name={'chevron-left'}
                        size={50}
                        color={'white'}
                    />
                </View>
            </Pressable>
        ),
    };
};

const styles = StyleSheet.create({
    featuredImageContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    featuredImage: {
        width: 200,
        height: 200,
        borderRadius: 14,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    backButtonContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    backButton: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButtonIcon: {
        alignSelf: 'center',
        backgroundColor: Colors.background_offset,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: 50,
        height: 50,
        borderRadius: 8,
    },
});

export default RecipeScreen;
