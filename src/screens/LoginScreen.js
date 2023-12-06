import React, {useState, useEffect, useContext} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './navigation/AuthStack';
import {AuthContext} from '../contexts/AuthContext';
import {HomeScreen} from './HomeScreen';

export const LoginScreen = ({navigation}) => {
  const [signInLoading, setSignInLoading] = useState(false);
  const [state, setState] = useState({
    emailId: '',
    password: '',
    userData: {fname: '', lastName: ''},
  });
  const {login} = useContext(AuthContext);

  const onPressLogin = async (email, password) => {
    // Call backend api to authenticate
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, pass)
    //   .then(res => {
    //     alert(res.user.email);
    //   })
    //   .catch(error => {
    //     // Handle Errors here.
    //     console.log(error.message);
    //   });
    //this.setState({ userData: JSON.stringify( res.user) });
    setSignInLoading(true);

    // axios({
    //   method: 'POST',
    //   url: '',
    //   params: {
    //     key: '',
    //   },
    //   data: {
    //     email,
    //     password,
    //   },
    // })
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(e => console.log(e));
    //dummy data
    const user = {
      fname: 'Rohit',
      lastName: 'Agrawal',
      token: 'hskfhksfkhsfkskhfhsf',
    };

    // dispatch({
    //   type: 'SIGN_IN',
    //   token: user.token,
    // });

    setState({
      ...this.state,
      userData: {
        name: user.fname,
        email: user.lastName,
      },
    });
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(user));
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log('Error saving data', error);
    }
  };

  useEffect(() => {
    console.log(state, '- Has changed');

    (async () => {
      try {
        let userData = await AsyncStorage.getItem('userData');
        if (userData != null) {
          let data = JSON.parse(userData);
          console.log('Storage data' + JSON.stringify(data));
          setState({
            ...this.state,
            userData: {
              fname: data.fname,
              lastName: data.lastName,
            },
          });
        }
      } catch (error) {
        console.log('Something went wrong', error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnChange = (text, input) => {
    setState(prevState => ({...prevState, [input]: text}));
  };

  // if there's a user show the message below
  // if (state.userData) {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.subTitle}>
  //         {state.userData.fname} is loggged in
  //       </Text>
  //     </View>
  //   );
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login</Text>
      <Text style={styles.subTitle}> Welcome Back!</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          onChangeText={text => {
            handleOnChange(text, 'emailId');
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          onChangeText={text => {
            handleOnChange(text, 'password');
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => onPressLogin(state.emailId, state.password)}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN </Text>
      </TouchableOpacity>
    </View>
  );
};
