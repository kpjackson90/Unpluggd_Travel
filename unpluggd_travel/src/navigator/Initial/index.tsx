import React, { useEffect, useState } from 'react';
import { AuthenticationStack } from '../Authentication';
import { ApplicationStack } from '../Application';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default () => {
  const [ready, setReady] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Archivo: require('../../../assets/fonts/Archivo/Archivo-Regular.ttf'),
      ArchivoBold: require('../../../assets/fonts/Archivo/Archivo-Bold.ttf'),
    });
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadFonts();
      } catch (err) {
        console.warn(err);
      }
      SplashScreen.hideAsync();
    };
    initialize();
  }, []);

  return <ApplicationStack />;
};
