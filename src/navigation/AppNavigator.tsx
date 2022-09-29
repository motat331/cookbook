import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { useSelector } from "react-redux";
import { AuthNavigator } from "./AuthNavigator";
import StartupScreen from "../screens/StartupScreen";
import { TabsNavigator } from "./TabsNavigator";
import { RootState } from "../state/Store";
import { useColorScheme } from "react-native";
import Colors from "../constants/Colors";

const myDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: Colors.background,
    card: "#303030",
  },
};

const myDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const AppNavigator = (props: any) => {
  const isAuth = useSelector((state: RootState) => !!state.auth.id);
  const didTryAutoLogin = useSelector(
    (state: RootState) => state.auth.didTryAutoLogin
  );
  const isDarkMode = useColorScheme() !== "dark";

  console.log("Is Auth -> ", isAuth);

  return (
    <NavigationContainer theme={isDarkMode ? myDarkTheme : myDefaultTheme}>
      {/* <StartupScreen /> */}
      {isAuth && <TabsNavigator />}
      {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {!isAuth && !didTryAutoLogin && <StartupScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
