import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { Screens } from '../screen';

const { Navigator, Screen } = createStackNavigator();

export const ApplicationStack = () => {
    return (
        <Navigator initialRouteName={Screens.Home}>
            <Screen name={Screens.Home} component={HomeScreen} options={{ headerShown: false }} />
        </Navigator>
    )
}