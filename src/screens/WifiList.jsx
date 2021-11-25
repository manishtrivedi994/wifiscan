import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import WifiManager from "react-native-wifi-reborn";
const { height, width } = Dimensions.get("window");
import RadioForm from "react-native-simple-radio-button";
import Toast from "react-native-simple-toast";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/Button";
import Logo from "../components/Logo";

const WifiList = () => {
  const navigation = useNavigation();
  const [availableWifiData, setAvailableWifiData] = useState([]);
  const [selectedWifi, setSelectedWifi] = useState("");
  useEffect(() => {
    WifiManager.loadWifiList()
      .then((data) => {
        console.log("data====>", data);
        let arr = [];
        data.forEach((item) => {
          arr.push({ label: item.SSID, value: item.SSID });
        });
        setAvailableWifiData(arr);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);

  const continueClicked = () => {
    if (selectedWifi === "") {
      Toast.show("Please select a wifi to continue");
      return;
    } else {
      navigation.navigate("WifiPassword", { selectedWifi: selectedWifi });
    }
  };
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>
        We have found these available WIFI connections
      </Text>
      <Text style={styles.subtitle}>
        Please select which WIFI you want to use
      </Text>
      <ScrollView style={{ paddingHorizontal: 50, marginTop: 10 }}>
        <RadioForm
          radio_props={availableWifiData}
          initial={
            availableWifiData &&
            availableWifiData.length &&
            availableWifiData[0].value
          }
          onPress={(value) => {
            setSelectedWifi(value);
          }}
          buttonColor={"grey"}
          animation={true}
          selectedButtonColor={"red"}
          labelStyle={styles.labelStyle}
        />
      </ScrollView>
      <CustomButton
        title={"Continue"}
        buttonStyles={styles.continue}
        buttonTextStyle={styles.continueText}
        onPress={() => {
          continueClicked();
        }}
      />
    </View>
  );
};

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
  },
  subtitle: { textAlign: "center", marginTop: 10, fontSize: 15 },
  labelStyle: {
    fontSize: 14,
    color: "grey",
  },
  continue: {
    width: width * 0.8,
    backgroundColor: "red",
    marginHorizontal: 50,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 50,
    marginBottom: 40,
  },
  continueText: {
    color: "#fff",
    fontSize: 15,
  },
  backArrow: {
    marginRight: width * 0.25,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  logoTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 40,
    width: 80,
    height: 80,
  },
  logoText: { fontSize: 60, fontWeight: "bold", color: "skyblue" },
});

export default WifiList;
