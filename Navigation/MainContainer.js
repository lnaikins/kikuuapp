import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createGlobalState } from "react-native-global-state-hooks";
import { BlurView } from 'expo-blur';

export const theme = createGlobalState(false);

//Screens
import HomeScreen from "./Screens/HomeScreen";
import CategoriesScreen from "./Screens/CategoriesScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import { View } from "react-native-web";

//Screen Names
const homeName = "Home";
const categoriesName = "Categories";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    const [isCustomDarkMode, setCustomMode] = theme();
    return (
        <View
            style={isCustomDarkMode ? styles.darkContainer : styles.lightContainer}
        >
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName={homeName}
                    screenOptions={({ route }) => ({
                        tabBarStyle: {position : 'absolute'},
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            let rn = route.name;

                            if (rn === homeName) {
                                iconName = focused ? "home" : "home-outline";
                            } else if (rn === categoriesName) {
                                iconName = focused ? "list" : "list-outline";
                            } else if (rn === settingsName) {
                                iconName = focused ? "settings" : "settings-outline";
                            }

                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarBackground: () => (
                            <BlurView tint={isCustomDarkMode ? "dark" : "light"} intensity={100} style={StyleSheet.absoluteFill} />
                        )
                    })}
                    tabBarOptions={
                        {
                            // activeTintColor: '#FF99C8'
                        }
                    }
                >
                    <Tab.Screen name={homeName} component={HomeScreen} />
                    <Tab.Screen name={categoriesName} component={CategoriesScreen} />
                    <Tab.Screen name={settingsName} component={SettingsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    lightContainer: {
        flex: 1,
        padding: 1,
        backgroundColor: "#FFFFFF",
    },
    darkContainer: {
        flex: 1,
        padding: 1,
        backgroundColor: "#181818",
        color: "#FFFFFF",
    },
});
