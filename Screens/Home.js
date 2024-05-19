

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";

const initialState = {
    email: "",
    password: "",
  };

export default function Home() {

    const [formData, setFormData] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const KeyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onLogin = () => {
    KeyboardHide();
    console.log(formData);
    setFormData(initialState);
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <ImageBackground
          style={styles.img}
          // source={require('../img/bg.png')}
        >
          <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{
        ...styles.form,
        paddingBottom: isShowKeyboard ? 32 : 100,
      }}
        >
            <Text style={styles.title}>Home</Text>
            

          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ecf0f1",
    },
    form: {
      paddingTop: 32,
      paddingBottom: 100,
      paddingLeft: 16,
      paddingRight: 16,
      backgroundColor: "#FFFFFF",
      borderTopLeftRadius:25,
      borderTopRightRadius:25,
    },
    img: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-end",
    },
    input: {
      padding: 16,
      borderWidth: 1,
      borderColor: "#E8E8E8",
      backgroundColor:"#F6F6F6",
      borderRadius: 8,
      marginHorizontal: 16,
      color: "#212121",
      fontSize: 16,
      fontFamily: "Roboto-Regular",
    },
    btn: {
      marginHorizontal: 16,
      height: 50,
      borderWidth: 1,
      borderColor: "transparent",
      backgroundColor: "#FF6C00",
      borderRadius: 100,
      marginBottom: 16,
      marginTop: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    btnTitle: {
      color: "#FFFFFF",
      fontSize: 16,
      fontFamily: "Roboto-Regular",
    },
    title: {
      color: "#212121",
      textAlign: "center",
      fontSize: 30,
      marginBottom: 32,
      fontFamily: "Roboto-Medium",
    },
    link: {
      fontSize: 16,
      textAlign: "center",
      color: "#1B4371",
      fontFamily: "Roboto-Regular",
    },
  });
  