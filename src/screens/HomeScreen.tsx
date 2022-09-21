import React, { useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import recipesData from '../../dummydata/recipes.json';
import MenuItemThumb from '../components/MenuItemThumb/MenuItemThumb';
const height = Dimensions.get('window').width / 2 - 30;

const HomeScreen = (props: any) => {
    const dispatch = useDispatch();

    const renderItem = ({ item, index }) => (
        <MenuItemThumb
            title={item.name}
            isEven={(index & 1) == 1 ? false : true}
        />
    );

    useEffect(() => {
        console.log('Recipes: ', recipesData);
    }, []);

    return (
        <View style={styles.screen}>
            <View style={styles.headerContainer}>
                <View style={styles.greetings}>
                    <Text style={styles.header1}>Hi, Vadim</Text>
                    <Text style={styles.header4}>
                        Ready to cook for dinner?
                    </Text>
                </View>
                <View style={styles.profileImageContainer}>
                    <Image
                        style={styles.profileImage}
                        source={require('../../assets/images/dummy-profile.jpg')}
                    />
                </View>
            </View>
            <View>
                <FlatList
                    data={recipesData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={{
                        justifyContent: 'space-between',
                        marginTop: 10,
                    }}
                />
            </View>
        </View>
    );
};

export const screenOptions = (navData: any) => {
    return {
        headerShown: false,
        headerTitle: 'Home Page',
    };
};

const styles = StyleSheet.create({
    profileImageContainer: { width: 50, height: 50 },
    profileImage: { width: '100%', height: '100%', borderRadius: 6 },
    greetings: {},
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    screen: {
        backgroundColor: Colors.background,
        flex: 1,
        padding: 25,
    },
    header1: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 0,
        paddingTop: 0,
    },
    header4: {
        color: '#C8C8C8',
        fontSize: 16,
    },
});

export default HomeScreen;
