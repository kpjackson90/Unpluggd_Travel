import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LandingScreen } from './screens/LandingScreen';
import { LoginScreen } from './screens/LoginScreen';
import { Screens } from '../screen';

const { Navigator, Screen } = createStackNavigator();

export const AuthenticationStack = () => {
    return (
        <Navigator initialRouteName={Screens.Login}>
            <Screen name={Screens.Landing} component={LandingScreen} options={{ headerShown: false }} />
            <Screen name={Screens.Login} component={LoginScreen} options={{ headerShown: false }} />
        </Navigator>
    )
}