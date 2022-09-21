import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
const width = (Dimensions.get('window').width - 40) / 2;

const MenuItemThumb = ({
    title,
    isEven,
}: {
    title: string;
    isEven: boolean;
}) => {
    const rightOrLeftStyle = (isEven: boolean) => {
        console.log('Is Even : ', isEven);
        if (isEven) return styles.right;
        else return styles.left;
    };
    return (
        <View style={[styles.mainContainer, rightOrLeftStyle(isEven)]}>
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    right: {
        // marginRight: 10,
        // backgroundColor: 'red',
    },
    left: {
        // marginLeft: 10,
        // backgroundColor: 'blue',
    },
    mainContainer: {
        backgroundColor: Colors.background_offset,
        // width,
        minWidth: '48%',
        maxWidth: '48%',
        flex: 1,
        padding: 10,
        borderRadius: 8,
    },
});

export default MenuItemThumb;
