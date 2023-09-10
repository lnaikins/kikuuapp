import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import HomeScreen from './Screens/HomeScreen'
import DetailsScreen from './Screens/DetailsScreen'
import SettingsScreen from './Screens/SettingsScreen' 

//Screen Names
const homeName = 'Home';
const detailsName = 'Categories';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
      <NavigationContainer>
        <Tab.Navigator 
        initialRouteName={homeName}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;

                if (rn === homeName) {
                    iconName = focused ? 'home' : 'home-outline'
                } else if (rn === detailsName) {
                    iconName = focused ? 'list' : 'list-outline'
                } else if (rn === settingsName) {
                    iconName = focused ? 'settings' : 'settings-outline';
                }

                return <Ionicons name={iconName} size={size} color={color}/>
            },
        })}
        tabBarOptions={{
            activeTintColor: '#FF99C8'
        }}
        >

            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={detailsName} component={DetailsScreen} />
            <Tab.Screen name={settingsName} component={SettingsScreen} />


        </Tab.Navigator>
      </NavigationContainer>
    );
}