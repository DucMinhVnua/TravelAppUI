import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// colors
import colors from './assets/colors/colors'

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen
import HomeScreen from './components/homeScreen';
import LikedScreen from './components/likedScreen';
import ProfileScreen from './components/profileScreen';
import DetailScreen from './components/detailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          height: 60,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: -3
          },
          shadowRadius: 5,
          shadowOpacity: 2.0,
        },
        headerShown: false
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image 
              source={require('./assets/images/home.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? colors.orange : colors.gray
              }} 
            />
          </View>
        ),
      }}/>
      <Tab.Screen name="Liked" component={LikedScreen} options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image 
              source={require('./assets/images/heart.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? colors.orange : colors.gray
              }} 
            />
          </View>
        )
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image 
              source={require('./assets/images/account.png')}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? colors.orange : colors.gray
              }}
            />
          </View>
        )
      }}/>
    </Tab.Navigator>
  )
}

// App ()
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={DetailScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
