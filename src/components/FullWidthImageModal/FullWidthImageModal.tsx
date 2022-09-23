import React, { useState } from 'react';
import { Text, View, Modal, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GestureRecognizer from 'react-native-swipe-gestures';
import Colors from '../../constants/Colors';

const FullWidthImageModal = ({
    image,
    modalVisible,
    setModalVisible,
}: {
    image: string;
    modalVisible: boolean;
    setModalVisible: any;
}) => {
    return (
        <GestureRecognizer
            style={{ flex: 1 }}
            onSwipeDown={() => setModalVisible(false)}
            onMagicTap={() => {}}
        >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image style={styles.image} source={image} />
                    </View>
                </View>
            </Modal>
        </GestureRecognizer>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'red',
    },
    modalView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',

        padding: 30,
    },
    image: {
        alignSelf: 'center',
        zIndex: 3,
        width: '100%',
        height: '100%',
        borderRadius: 20,
        resizeMode: 'cover',
        flexBasis: 'auto',
    },
});

export default FullWidthImageModal;
