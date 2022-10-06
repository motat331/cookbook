import React, { useState } from "react";
import { View, Pressable } from "react-native";
import { Icon } from "react-native-gradient-icon";
import Colors from "../../constants/Colors";

const DifficultyPicker = () => {
  const [selectedFlame, setSelectedFlame] = useState<0 | 1 | 2>(0);
  return (
    <View
      style={{
        width: "90%",
        backgroundColor: Colors.background_offset2,
        alignSelf: "center",
        flexDirection: "row",
      }}
    >
      <Pressable
        onPress={() => {
          setSelectedFlame(0);
        }}
      >
        <Icon
          size={100}
          colors={[
            { color: "#A7C38B", offset: "0.40", opacity: "1" },
            { color: "#404040", offset: "0.40", opacity: "1" },
            { color: "#404040", offset: "0", opacity: "1" },
          ]}
          name="local-fire-department"
          type="material"
          style={{ opacity: selectedFlame === 0 ? 1 : 0.15 }}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          setSelectedFlame(1);
        }}
      >
        <Icon
          size={100}
          colors={[
            { color: "#A7C38B", offset: "0.60", opacity: "1" },
            { color: "#404040", offset: "0.60", opacity: "1" },
            { color: "#404040", offset: "0", opacity: "1" },
          ]}
          name="local-fire-department"
          type="material"
          style={{ opacity: selectedFlame === 1 ? 1 : 0.15 }}
        />
      </Pressable>

      <Pressable
        onPress={() => {
          setSelectedFlame(2);
        }}
      >
        <Icon
          size={100}
          color={"#A7C38B"}
          name="local-fire-department"
          type="material"
          style={{ opacity: selectedFlame === 2 ? 1 : 0.15 }}
        />
      </Pressable>
    </View>
  );
};

export default DifficultyPicker;
