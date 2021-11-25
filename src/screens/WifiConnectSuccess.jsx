import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomButton from "../components/Button";
import Logo from "../components/Logo";

const WifiConnectSuccess = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.successContainer}>
        <Text style={styles.successText}>SUCCESS !</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="wifi" color="black" size={160} />
      </View>
      <Text style={styles.text}>
        Care Alert has successfully connected to your WIFI network
      </Text>
      <Text style={{ ...styles.text, marginTop: 20 }}>
        Continue to finish installing the application
      </Text>
      <CustomButton
        title={"Continue"}
        buttonStyles={styles.continue}
        buttonTextStyle={styles.continueText}
        onPress={() => {}}
      />
    </View>
  );
};

export default WifiConnectSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    paddingHorizontal: 70,
    color: "grey",
  },
  continue: {
    width: width * 0.8,
    backgroundColor: "red",
    marginHorizontal: 50,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
    bottom: 50,
  },
  backArrow: {
    marginTop: 30,
    marginLeft: 20,
  },
  successContainer: { alignItems: "center", paddingTop: 40 },
  successText: { fontWeight: "bold", fontSize: 25 },
  iconContainer: { alignItems: "center", marginTop: 60 },
});
