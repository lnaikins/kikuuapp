import * as React from "react";
import { useState } from 'react';
import { View, Text, Switch, StyleSheet, useColorScheme } from "react-native";
import { useContext } from 'react';
import { theme } from '../MainContainer';
import { Button } from "react-native-web";

export default function SettingsScreen({ navigation }) {
  const isDarkMode = useColorScheme() === "dark";

  const [isCustomDarkMode, setCustomMode] = theme();

  return (
    <View style={isCustomDarkMode ? styles.blackcontainer : styles.whitecontainer}>
      <View style={styles.container}>
        <Text style={isCustomDarkMode ? styles.whiteText : styles.darkText}>Dark Theme {isCustomDarkMode.toString()}</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isCustomDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#000000"
          onValueChange={(previousState) =>
            setCustomMode(previousState)
          }
          value={isCustomDarkMode}
        />
        {/* <Button
        onPress={() =>
          setCount(count + 1)
        }
      ></Button> */}
      </View>
    </View>
  )
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
    marginRight: 10
  },
  darkText: {
    color: "#181818",
    marginRight: 10
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    justifyContent: 'center',
  },
  textStyle: {
    marginRight: 10
  }
});




