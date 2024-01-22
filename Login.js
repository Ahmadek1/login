//Login.js
import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  Input,
  TextInput,
  Item,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
  View,
  SafeAreaView
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
const Login = ({ navigation }) => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const handleLogin = () => {
    const userData = {
      UserName: UserName,
      Password: Password,
    };
    console.log("Logging in with:", userData);
    fetch("http://192.168.135.234:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          // Login successful, navigate to home
          navigation.navigate('HomeTabs')
        } else {
          // Login failed, set error message
          setLoginError("Invalid login credentials.");
        }
      })
      .catch((error) => {
        console.error("Login request error:", error);
        setLoginError("An error occurred. Please try again.");
      });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            alt=""
            resizeMode="contain"
            style={styles.headerImg}
            source={{
              uri: 'https://withfra.me/android-chrome-512x512.png',
            }} />

          <Text style={styles.title}>
            Sign in to <Text style={{ color: '#075eec' }}>Gol-Jano</Text>
          </Text>

          <Text style={styles.subtitle}>
            Get access to Gol-Jano Food delivery
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Username</Text>

            <TextInput
              
              
              
              onChangeText={setUserName}
              placeholder="Username"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
               />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>

            <TextInput
              
              onChangeText={setPassword}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry
               />
               {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={handleLogin}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle link
              navigation.navigate('Register')
            }}
            style={{ marginTop: 'auto' }}>
            <Text style={styles.formFooter}>
              Don't have an account?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  /** Header */
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  /** Form */
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
export default Login;
