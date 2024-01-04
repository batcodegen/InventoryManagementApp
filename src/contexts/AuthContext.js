import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {usePostApi} from '../services/useApi';
import {ENDPOINT, setHeaderToken} from '../services/request';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {postData, isLoading: isPosting, data, error} = usePostApi();

  useEffect(() => {
    if (data) {
      setUserToken(data.token);
      setUserData(data.user);
      (async function saveUserDataToAsync() {
        await AsyncStorage.setItem('userdata', JSON.stringify(data));
      })();
      // also set token in header
      setHeaderToken(data.token);
    }
  }, [data]);

  useEffect(() => {
    (async function getUserData() {
      setIsLoading(true);
      const userdata = await AsyncStorage.getItem('userdata');
      if (userdata) {
        const {token, user} = JSON.parse(userdata);
        setUserToken(token);
        setHeaderToken(token);
        setUserData(user);
      }
      setIsLoading(false);
    })();
  }, []);

  const login = useCallback(async logindata => {
    await postData(ENDPOINT.LOGIN, logindata);
  }, []);

  const logout = async () => {
    setUserToken(null);
    await AsyncStorage.removeItem('userToken');
  };
  console.log('--ser22--', userData, userToken);
  const value = useMemo(
    () => ({
      login,
      logout,
      isLoading: isPosting,
      userToken,
      setIsLoading,
      userData,
    }),
    [isPosting, login, userData, userToken],
  );

  return (
    <AuthContext.Provider value={value}>
      <View style={styles.root}>
        {children}
        {isLoading || isPosting ? (
          <View style={styles.loader}>
            <ActivityIndicator size={'large'} />
          </View>
        ) : null}
      </View>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
  loader: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
