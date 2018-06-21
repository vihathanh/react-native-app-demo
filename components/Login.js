import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  KeyboardAvoidingView,
  Platform } from 'react-native';
import axios from 'axios';
import validator, {INPUT_FIELDS} from '../helpers/validate/validate';
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

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/140siq').then(response => console.log(response));
  }

  validateEmail = (value) => {
    const result = validator.validateEmail(value);
    console.log("result:", result);
    if (!result.valid) {
      this.setState({
        email: value,
        errors: {
          ...this.state.errors,
          email: result.errors[0]
        }
      });
      console.log(this.state.errors.email);
      return false;
    }
    this.setState({
      email: value,
      errors: {
        ...this.state.errors,
        email: ''
      }
    });
    return true;
  };

  validatePassword = (value) => {
    const result = validator.validatePassword(value);
    if (!result.valid) {
      this.setState({
        password: value,
        errors: {
          ...this.state.errors,
          password: result.errors[0]
        }
      });
      return false;
    }
    this.setState({
      password: value,
      errors: {
        ...this.state.errors,
        password: ''
      }
    });
    return true;
  };

  handleFieldChange = (field, value) => {
    switch (field) {
      case INPUT_FIELDS.EMAIL:
        this.validateEmail(value);
        break;
      case INPUT_FIELDS.PASSWORD:
        this.validatePassword(value);
        break;
      default:
        break;
    }
  };

  validateLogin() {
    return this.validateEmail(this.state.email)
      && this.validatePassword(this.state.password);
  }

  handleLogin() {
    this.validateLogin();

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
                type="email"
                name="email"
                text="Email:"
                autoCorrect={true}
                autoFocus={true}
                placeholder="Enter your email..."
                onChange={(val) => this.handleFieldChange(INPUT_FIELDS.EMAIL, val)}
                errors={this.state.errors.email}
              />

              <InputField
                type="password"
                name="password"
                text="Password:"
                placeholder="Enter your password..."
                onChange={(val) => this.handleFieldChange(INPUT_FIELDS.PASSWORD, val)}
                errors={this.state.errors.password}
              />

              <Button
                onPress={() => this.handleLogin()}
                title="SIGN IN"
              />

              <Text
                style={{color: 'blue', textDecorationLine: 'underline', paddingTop: 20, paddingBottom: 20}}
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
