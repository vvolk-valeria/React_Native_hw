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
  Dimensions
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

const initialState = {
  avatar:'',
  login:'',
  email: "",
  password: "",
};

export default function RegistrationScreen() {
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
    <TouchableWithoutFeedback onPress={KeyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.img}
          source={require('../img/bg.png')}
        >
          <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{
        ...styles.form,
        paddingBottom: isShowKeyboard ? 32 : 45,
      }}
        >

<TextInput
              value={formData.avatar}
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setFormData((prevState) => ({ ...prevState, avatar: value }))
              }
              style={styles.photo}
            />
             <TouchableOpacity
              style={styles.btn_add}
              activeOpacity={0.7}
            //  onPress={}
            >
             <AntDesign name="plus" size={20} color="#E8E8E8" />
            </TouchableOpacity>


            <Text style={styles.title}>Регистрация</Text>
            <TextInput
              value={formData.login}
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setFormData((prevState) => ({ ...prevState, login: value }))
              }
              placeholder="Логин"
              style={{ ...styles.input, marginBottom: 16 }}
            />
            <TextInput
              value={formData.email}
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setFormData((prevState) => ({ ...prevState, email: value }))
              }
              placeholder="Адрес электронной почты"
              style={{ ...styles.input, marginBottom: 16 }}
            />
            <TextInput
              value={formData.password}
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setFormData((prevState) => ({ ...prevState, password: value }))
              }
              placeholder="Пароль"
              secureTextEntry={true}
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.7}
              onPress={onLogin}
            >
              <Text style={styles.btnTitle}>Войти</Text>
            </TouchableOpacity>
            <Text style={styles.link}>Нет аккаунта? Зарегистрироваться</Text>
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
    position:"relative",
    paddingTop: 62,
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
  photo:{
    position:"absolute",
    top:-55,
    left:Dimensions.get('window').width/2-60,
    borderColor: "#E8E8E8",
    backgroundColor:"#F6F6F6",
    borderRadius: 8,
    width:120,
    height:120,
  },
  btn_add:{
    position:"absolute",
    top:20,
    right:Dimensions.get('window').width/2-75,
    height:25,
    width:25,
    borderWidth: 1,
    borderColor: "#BDBDBD",
   // borderColor:"#FF6C00",
    backgroundColor:"#FFFFFF",
    borderRadius: 50,
    justifyContent:"center",
    alignItems:"center",
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
