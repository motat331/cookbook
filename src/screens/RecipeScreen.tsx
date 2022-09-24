import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  Text,
  ScrollView,
} from "react-native";
import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import MetaDetails from "../components/MetaDetails/MetaDetails";
import Tabber from "../components/Tabber/Tabber";

const RecipeScreen = (props: any) => {
  const [activeTab, setActiveTab] = useState<"ingredients" | "instructions">(
    "ingredients"
  );
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.featuredImageContainer}>
        <Image
          style={styles.featuredImage}
          source={require("../../assets/images/items/cake.jpg")}
        />
      </View>
      <View style={styles.mainBodyContainer}>
        <View style={styles.bodyTitle}>
          <Text style={styles.bodyText}>Penne Chicken Carbonara</Text>
        </View>
        <MetaDetails></MetaDetails>
        <Tabber setActiveTab={setActiveTab} activeTab={activeTab}></Tabber>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  bodyTitle: {
    padding: 20,
  },
  bodyText: {
    fontSize: 30,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  mainBodyContainer: {
    backgroundColor: Colors.background_offset2,
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: 1000,
    paddingHorizontal: 30,
  },
  featuredImageContainer: {
    marginVertical: 30,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  featuredImage: {
    width: 200,
    height: 200,
    borderRadius: 14,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  backButtonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  backButton: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonIcon: {
    alignSelf: "center",
    backgroundColor: Colors.background_offset,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});

export const screenOptions = (navData: any) => {
  return {
    headerTitle: "",
    headerStyle: {
      backgroundColor: "rgba(0,0,0,.1)",
    },
    headerShadowVisible: false,
    headerTintColor: "white",
    headerTransparent: true,
    headerLeft: () => (
      <Pressable
        onPress={() => {
          navData.navigation.goBack();
        }}
        style={styles.backButtonContainer}
      >
        <View style={styles.backButton}>
          <Icon
            style={styles.backButtonIcon}
            name={"chevron-left"}
            size={50}
            color={"white"}
          />
        </View>
      </Pressable>
    ),
  };
};

export default RecipeScreen;