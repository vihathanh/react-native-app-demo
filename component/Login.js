import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform } from 'react-native';
import SearchInput from './SearchInput';


export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView>
        <View style={[styles.containerLogin,]}>
          <View style={[styles.wrapperLogin,]}>
            <View>
              <Image style={[styles.logo,]} source={require('../assets/Bliink-logo.png')}/>
            </View>
            <View style={[styles.formLogin,]}>
              <Text style={[styles.largeText, styles.textStyle]}>SIGN IN</Text>
              <Text style={[styles.smallText, styles.textStyle]}>Email: </Text>
              <SearchInput placeholder="Enter Email..." />
              <Text style={[styles.smallText, styles.textStyle]}>Password: </Text>
              <SearchInput placeholder="Enter Password..." />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: '#F8F8FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperLogin: {
    padding: 2,
  },
  formLogin: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
    marginBottom: 30,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
