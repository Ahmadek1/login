// Register.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,
    ScrollView, ImageBackground,Dimensions,Image, SafeAreaView} from 'react-native';
    import Icon from 'react-native-vector-icons/MaterialIcons';
//import { fetch } from 'react-native'; // You may need to install 'fetch' using npm or yarn
const Register = ({navigation}) => {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [Email, setEmail] = useState('');
    const handleRegistration = () => {
      // Prepare user registration data
      const userData = {
        FirstName,
        LastName,
        UserName,
        Password,
        Email,
      };
      // Make the API request to your server
      fetch('http://192.168.135.234:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      .then((response) => {
        if (!response.ok) {
          // If response is not ok, throw an error
          throw new Error('Registration failed');
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log('Registration response:', data);
        // Show success message to the user
        alert('User registered successfully');
      })
      .catch((error) => {
        console.error('Registration error:', error);
        // Show error message to the user
        alert('Error: User registration failed');
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
            Sign Up to <Text style={{ color: '#075eec' }}>Gol-Jano</Text>
          </Text>

          <Text style={styles.subtitle}>
            Get access to Gol-Jano Food delivery
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>First Name</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
             
              onChangeText={setFirstName}
              placeholder="first Name"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
               />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Last Name</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              
              onChangeText={setLastName}
              placeholder="Last Name"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
               />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Username</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              
              onChangeText={setUserName}
              placeholder="Username"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
               />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>

            <TextInput
              autoCorrect={false}
              onChangeText={setPassword}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
               />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              
              onChangeText={setEmail}
              placeholder="goljano@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
               />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
                handleRegistration
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle link
              navigation.navigate('Login')
            }}
            style={{ marginTop: 0 }}>
            <Text style={styles.formFooter}>
              allready have an account?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>Sign in here!</Text>
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


export default Register;