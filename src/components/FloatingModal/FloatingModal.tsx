import React from "react";
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { TouchableOpacity } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

const FloatingModal = ({
  modalVisible,
  setModalVisible,
  children,
}: {
  modalVisible: boolean;
  setModalVisible: any;
  children;
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
              <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: 30,
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FloatingModal;
