import React from 'react';
import { AppRegistry, Platform, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Button extends React.Component {
  render() {
    return(
      <View style = { styles.container }>
        <View style = { styles.button_holder }>
          <TouchableOpacity
            activeOpacity = { 0.2 }
            onPress = {this.props.onPress}
            style = { styles.common_button }>
            <Text style = { styles.button_text } title={this.props.title}>{this.props.title}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    button_text: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'stretch',
      textAlign: 'center'
    },

    common_button: {
      width: 200,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#F44336',
      padding: 12,
      backgroundColor: '#F44336'
      },

    button_holder: {
      marginTop: 10
    }
  });
