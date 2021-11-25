import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  PermissionsAndroid,
} from "react-native";
import WifiManager from "react-native-wifi-reborn";
import RNAndroidLocationEnabler from "react-native-android-location-enabler";
const { height, width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import { Loader } from "../components/Loader";
import CustomButton from "../components/Button";
import Logo from "../components/Logo";
import Toast from "react-native-simple-toast";

const WifiPassword = (props) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const ConnectToNetwork = () => {
    setLoading(true);
    WifiManager.setEnabled(true);
    WifiManager.disconnect();
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "",
        message: "",
        buttonNegative: "",
        buttonPositive: "",
      }
    )
      .then((granted) => {
        console.log(granted);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
            interval: 10000,
            fastInterval: 5000,
          })
            .then((data) => {
              WifiManager.connectToProtectedSSID(
                props.route.params.selectedWifi,
                password,
                false
              )
                .then((data) => {
                  console.log("connectToProtectedSSID successfully!", data);
                  setLoading(false);
                  navigation.navigate("WifiConnectSuccess");
                })
                .catch((err) => {
                  console.log("connectionError==>", err.message);
                  Toast.show(err.message);
                  setLoading(false);
                });
            })
            .catch((err) => {
              setLoading(false);
            });
        } else {
          console.log("permission not granted");
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>
        Enter the wifi password for {props.route.params.selectedWifi}
      </Text>
      <TextInput
        style={styles.inputBox}
        placeholderTextColor={"#777777"}
        placeholder={"Password"}
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton
        title={"Continue"}
        buttonStyles={styles.continue}
        buttonTextStyle={styles.continueText}
        onPress={() => {
          ConnectToNetwork();
        }}
      />
      {loading && <Loader loading={loading} />}
    </View>
  );
};

export default WifiPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 50,
    marginTop: 50,
  },
  inputBox: {
    height: 45,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "black",
    width: width * 0.6,
    textAlign: "center",
    marginTop: 20,
    borderRadius: 30,
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
  continueText: {
    color: "#fff",
    fontSize: 15,
  },
  backArrow: {
    marginTop: 30,
    marginLeft: 20,
  },
});
