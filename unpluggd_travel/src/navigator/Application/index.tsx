import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { MarketplaceScreen } from './screens/MarketplaceScreen';
import { MintScreen } from './screens/MintScreen';
import { SearchScreen } from './screens/SearchScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { NotificationScreen } from './screens/NotificationScreen';
import { SingleDestinationScreen } from './screens/SingleDestinationScreen';
import { DestinationRestaurantScreen } from './screens/DestinationRestaurantScreen';
import {DestinationActivityScreen } from './screens/DestinationActivityScreen'
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import { Screens } from '../screen';
import {
  HomeIcon,
  MarketplaceIcon,
  SearchIcon,
  NotificationIcon,
  ProfileIcon,
} from '../../icons';

const Tab = createBottomTabNavigator();

const { Navigator, Screen } = createStackNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 50,
          height: 100,
          paddingTop: 30,
          paddingLeft: 10,
        },
      }}
    >
      <Tab.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: '#1F64E5',
                  height: 56,
                  width: 56,
                  borderRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <HomeIcon color={'#FCFEFF'} />
              </View>
            ) : (
              <HomeIcon color={'#B6B6B6'} />
            ),
          tabBarLabel: ({ focused }) => false,
        }}
      />
      <Tab.Screen
        name={Screens.Marketplace}
        component={MarketplaceScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: '#1F64E5',
                  height: 56,
                  width: 56,
                  borderRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MarketplaceIcon color={'#FCFEFF'} />
              </View>
            ) : (
              <MarketplaceIcon color={'#B6B6B6'} />
            ),
          tabBarLabel: ({ focused }) => false,
        }}
      />
      <Tab.Screen
        name={Screens.Search}
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: '#1F64E5',
                  height: 56,
                  width: 56,
                  borderRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <SearchIcon color={'#FCFEFF'} />
              </View>
            ) : (
              <SearchIcon color={'#B6B6B6'} />
            ),
        }}
      />
      <Tab.Screen
        name={Screens.Notification}
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: '#1F64E5',
                  height: 56,
                  width: 56,
                  borderRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <NotificationIcon color={'#FCFEFF'} />
              </View>
            ) : (
              <NotificationIcon color={'#B6B6B6'} />
            ),
        }}
      />
      <Tab.Screen
        name={Screens.Profile}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: '#1F64E5',
                  height: 56,
                  width: 56,
                  borderRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ProfileIcon color={'#FCFEFF'} />
              </View>
            ) : (
              <ProfileIcon color={'#B6B6B6'} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export const ApplicationStack = () => {
  return (
    <Navigator initialRouteName={Screens.Home}>
      <Screen
        name='MainTabNavigator'
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
      <Screen
        name={Screens.SingleDestination}
        component={SingleDestinationScreen}
        options={{ headerShown: false }}
      />
      <Screen  name={Screens.DestinationRestaurant} component={DestinationRestaurantScreen} options={{ headerShown: false}}/>
      <Screen  name={Screens.DestinationActivity} component={DestinationActivityScreen} options={{ headerShown: false}}/>
    </Navigator>
  );
};
