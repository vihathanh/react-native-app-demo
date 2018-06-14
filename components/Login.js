import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  KeyboardAvoidingView,
  Platform } from 'react-native';
import InputField from './common/InputField';
import Button from './common/Button';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: '',
      errors: {
        email: '',
        password: ''
      },
    }
  }

  validateEmail = (value) => {
    this.setState({
      email: value,
    });

    alert(value);
  };

  validatePassword = (value) => {
    this.setState({
      password: value,
    });
  };

  validateLogin() {
    return this.validateEmail(this.state.email);
  }

  handleLogin() {
    this.validateLogin();
    console.log(this.state.email);

  }

  render() {
    return (
      <KeyboardAvoidingView>
        <View style={[styles.containerLogin,]}>
          <View style={[styles.wrapperLogin,]}>
            <View style={[styles.logo,]}>
              <Image source={require('../assets/Bliink-logo.png')}/>
            </View>
            <View style={[styles.formLogin,]}>
              <Text style={[styles.largeText, styles.textStyle]}>Sign in</Text>
              <InputField
                autoCorrect={true}
                text="Email:"
                placeholder="Enter your email..."
                onChangeText={(evt, val) => this.handleChangeText('Email', val)}
              />

              <InputField
                text="Password:"
                placeholder="Enter your password..."
                onChangeText={(evt, val) => this.handleChangeText('Password', val)}
              />

              <Button
                onPress={() => this.handleLogin()}
                title="SIGN IN"
              />

              <Text style={{color: 'blue', textDecorationLine: 'underline', paddingTop: 20, paddingBottom: 20}}
                    onPress={() => Linking.openURL('http://google.com')}>
                Forgot password?
              </Text>

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
  logo: {
    alignItems: 'center',
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
    textAlign: 'left',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
