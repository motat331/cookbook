import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Colors";

interface Props {
  setActiveTab: any;
  activeTab: "ingredients" | "instructions";
}

const tabs = ["Ingredients", "Instructions"];

const Tabber = ({ setActiveTab, activeTab }: Props) => {
  return (
    <View style={styles.tabber}>
      {tabs.map((tab) => (
        <Pressable
          onPress={() => setActiveTab(tab)}
          style={[
            styles.tabOption,
            activeTab == tab && styles.tabOptionSelected,
          ]}
        >
          <Text
            style={[
              styles.tabOptionText,
              activeTab == tab && styles.tabOptionTextSelected,
            ]}
          >
            {tab}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  tabber: {
    backgroundColor: Colors.background,
    width: "100%",
    height: 70,
    marginTop: 20,
    borderRadius: 50,
    flexDirection: "row",
    padding: 10,
  },
  tabOption: {
    borderRadius: 50,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  tabOptionSelected: {
    backgroundColor: Colors.background_offset2,
  },
  tabOptionText: {
    color: "grey",
  },
  tabOptionTextSelected: {
    color: "#A7C38B",
  },
});
export default Tabber;
