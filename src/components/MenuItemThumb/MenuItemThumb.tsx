import React, { useEffect, useState } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
    Modal,
    Pressable,
} from 'react-native';
import Colors from '../../constants/Colors';
import FullWidthImageModal from '../FullWidthImageModal/FullWidthImageModal';
const win = Dimensions.get('window');
const imageSize = win.width / 2 - 110;

const MenuItemThumb = ({
    title,
    image,
    onPress,
}: {
    image: string;
    title: string;
    onPress: any;
}) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    return (
        <Pressable onPress={onPress} style={styles.mainContainer}>
            <FullWidthImageModal
                image={image}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            ></FullWidthImageModal>
            <Pressable
                style={styles.imageContainer}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Image style={styles.itemImage} source={image} />
            </Pressable>
            <View style={styles.card}>
                <Text style={styles.itemName}>{title}</Text>
                <View style={styles.metaContainer}>
                    <Text style={styles.metaText}>60 Min</Text>
                    <Text style={styles.metaText}>|</Text>
                    <Text style={styles.metaText}>Easy Lvl</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        minWidth: '48%',
        maxWidth: '48%',
        height: '100%',
        // backgroundColor: 'red',
    },
    card: {
        backgroundColor: Colors.background_offset,
        // backgroundColor: 'yellow',
        padding: 20,
        paddingTop: imageSize / 2 + 20,
        borderRadius: 8,
        flex: 1,
        height: '100%',
        // minHeight: '100%',
        flexGrow: 1,
    },
    metaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    metaText: {
        fontSize: 12,
        color: 'grey',
    },
    imageContainer: {
        zIndex: 3,
        marginBottom: -imageSize / 2,
    },
    itemImage: {
        alignSelf: 'center',

        maxWidth: imageSize,
        minWidth: imageSize,
        width: imageSize,
        maxHeight: imageSize,
        minHeight: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
        resizeMode: 'center',
        flexBasis: 'auto',
    },
    itemName: {
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        height: 40,
    },
});

export default MenuItemThumb;
