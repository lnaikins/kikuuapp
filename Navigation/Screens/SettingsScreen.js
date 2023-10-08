import * as React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

export default function SettingsScreen({ navigation }) {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View style={isDarkMode ? styles.blackcontainer : styles.whitecontainer}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello World
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  blackcontainer: {
    backgroundColor: "#181818",
    flex: 1,
    alignItems: "center",
  },
  whitecontainer: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    alignItems: "center",
  },
  whiteText: {
    color: "#FFFFFF",
  },
  darkText: {
    color: "#181818",
  },
});
