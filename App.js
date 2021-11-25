import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStackContainer from "./src/navigation/RootStackNavigator";
const statusBarHeight = StatusBar.currentHeight;

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
        <RootStackContainer />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
