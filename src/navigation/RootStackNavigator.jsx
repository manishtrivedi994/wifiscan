import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WifiList from "../screens/WifiList";
import WifiPassword from "../screens/WifiPassword";
import WifiConnectSuccess from "../screens/WifiConnectSuccess";
const Stack = createStackNavigator();
const headerOptionForStackPage = {
  headerStyle: {
    backgroundColor: "#fff",
    alignItems: "center",
  },

  headerTitleStyle: { color: "#000", fontSize: 16 },
  headerShown: false,
  headerTintColor: "#000",
};

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={WifiList}
      screenOptions={headerOptionForStackPage}
    >
      <Stack.Screen name="WifiList" component={WifiList} />
      <Stack.Screen name="WifiPassword" component={WifiPassword} />
      <Stack.Screen name="WifiConnectSuccess" component={WifiConnectSuccess} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
