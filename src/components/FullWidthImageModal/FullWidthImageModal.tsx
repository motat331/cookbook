import React, { useState } from 'react';
import {
    Text,
    View,
    Modal,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
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
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={() => {
                        setModalVisible(false);
                    }}
                    activeOpacity={1}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableWithoutFeedback>
                                <Image style={styles.image} source={image} />
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </GestureRecognizer>
    );
};

const styles = StyleSheet.create({
    touchable: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 30,
        flex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: '100%',
        height: '100%',
        // backgroundColor: 'rgba(0,0,0,0.2)',
        // padding: 30,
        alignItems: 'center',
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
