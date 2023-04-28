import { StatusBar } from 'expo-status-bar';
import {Dimensions, StyleSheet, Text, View } from 'react-native';
import  LoginScreen  from "./Screens/LoginScreen";
import  RegistrationScreen  from "./Screens/RegistrationScreen";
import { useFonts } from 'expo-font';
import React, { useState, useEffect } from "react";


const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'), //400
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'), //500
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'), //700
    'ita': require('./assets/fonts/Roboto-ThinItalic.ttf'), //700
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  // const [dimensions, setDimensions] = useState({
  //   window: windowDimensions,
  //   screen: screenDimensions,
  // });


  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener(
  //     'change',
  //     ({window, screen}) => {
  //       setDimensions({window, screen});
  //     },
  //   );
  //   return () => subscription?.remove();
  // });

  return (

    // <LoginScreen />

    <RegistrationScreen/>
    // <View style={styles.container} onLayout={onLayoutRootView}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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
