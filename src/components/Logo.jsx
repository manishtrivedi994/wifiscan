import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const { height, width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

const Logo = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.logo}>
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" color="black" size={30} />
      </TouchableOpacity>
      <View style={styles.logoTextContainer}>
        <Text style={styles.logoText}>a</Text>
      </View>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
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
  logoText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "skyblue",
    marginTop: -10,
  },
});
