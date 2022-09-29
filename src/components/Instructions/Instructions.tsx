import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

interface Props {
  instructions: string;
  onUpdateInstructions: (text: string) => void;
  updateMode: boolean;
}

const Instructions = ({
  instructions,
  onUpdateInstructions,
  updateMode,
}: Props) => {
  const [copiedInstructions, setCopiedInstructions] = useState<any>("");

  const onChangeText = (text) => {
    console.log(text);
    setCopiedInstructions(text);
    onUpdateInstructions(text);
  };
  useEffect(() => {
    setCopiedInstructions(instructions);
  }, []);
  return (
    <View style={styles.mainContainer}>
      {!updateMode ? (
        <Text style={styles.p}>{copiedInstructions}</Text>
      ) : (
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={copiedInstructions}
          multiline
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "white",
    color: "white",
  },
  mainContainer: {
    marginTop: 25,
  },
  p: {
    color: "#DFDFDF",
    textAlign: "justify",
  },
});

export default Instructions;
