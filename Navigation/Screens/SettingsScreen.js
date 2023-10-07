import * as React from "react";
import {useState} from 'react';
import { View, Text,Switch, StyleSheet, useColorScheme } from "react-native";

export default function SettingsScreen({ navigation }) {
  const isDarkMode = useColorScheme() === "dark";

  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Dark Theme</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#000000"
        onValueChange={ (previousState) => 
          setIsEnabled(previousState)
        }
        value={isEnabled}
      />
    </View>)
      // <View style={isDarkMode ? styles.blackcontainer : styles.whitecontainer}>
      // <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
      //   Hello World
      // </Text>
      // </View>
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin : 20,
    justifyContent: 'center',
  },
  textStyle : {
    marginRight : 10
  }
});




