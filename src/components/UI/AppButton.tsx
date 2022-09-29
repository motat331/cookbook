import React from "react";

import { Text, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import Colors from "../../constants/Colors";
import { IAppButton } from "../../models/Components/AppButton";

export const AppButton = (props: IAppButton) => {
  const { onPress, activityIndicator } = props;
  return (
    <Pressable style={[styles.button, props.style]} onPress={onPress}>
      {activityIndicator && <ActivityIndicator color="#00ff00" />}
      {!activityIndicator && <Text style={styles.text}>{props.text}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    color: "white",
    borderRadius: 20,
    fontSize: 14,
    backgroundColor: Colors.primary,
    alignItems: "center",
    marginTop: 10,
    height: 50,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
