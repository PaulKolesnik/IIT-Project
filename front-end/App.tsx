import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import React, {FC} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './screens/home-screen';
import LoginScreen from './screens/login-screen';
import RegisterScreen from './screens/register-screen';
import PostsScreen from './screens/all-posts';

const Tab = createBottomTabNavigator()
const App: FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'md-home' : 'md-home-outline';
                    } 
                    else if (route.name === 'Login') 
                    {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }
                    else if (route.name === 'Register') 
                    {
                        iconName = focused ? 'person-add' : 'person-add-outline';
                    }
                    else if (route.name === 'Posts') 
                    {
                        iconName = focused ? 'document-text' : 'document-text-outline';
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>

                <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
                <Tab.Screen name="Login" component={LoginScreen}></Tab.Screen>
                <Tab.Screen name="Register" component={RegisterScreen}></Tab.Screen>
                <Tab.Screen name="Posts" component={PostsScreen}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    txt: {
        fontSize: 35
    },
    image: {
      width: 500,
      height: 400,
      resizeMode: 'contain'
    },
    txtInpt: {
        width: 400,
        height: 50,
        textAlign: 'center'
    }
});

export default App