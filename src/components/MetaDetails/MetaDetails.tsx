import React, { useState } from "react";
import { View, StyleSheet, Text, Modal, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import DifficultyPicker from "../DifficultyPicker/DifficultyPicker";
import FloatingModal from "../FloatingModal/FloatingModal";
const MetaDetails = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  return (
    <View style={styles.metaContainer}>
      <View style={styles.metaItem}>
        <Icon name={"watch-later"} size={30} color={"#A7C38B"} />
        <Text style={styles.metaText}>60 Minute</Text>
        <Text style={styles.metaSubText}>Cooking</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.metaItem}>
        <Icon name={"local-fire-department"} size={30} color={"#A7C38B"} />
        <Text style={styles.metaText}>Easy level</Text>
        <Text style={styles.metaSubText}>Recipe</Text>
        <FloatingModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        >
          <DifficultyPicker />
        </FloatingModal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  metaItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  metaContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    alignItems: "center",
  },
  divider: {
    height: 40,
    backgroundColor: "grey",
    width: 1,
  },
  metaText: {
    fontSize: 14,
    color: "#D3D3D3",
    paddingVertical: 5,
  },
  metaSubText: {
    fontSize: 10,
    color: "grey",
  },
});

export default MetaDetails;
