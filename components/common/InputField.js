import React from 'react';
import {Platform, StyleSheet, TextInput, View, Text} from 'react-native';

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.inputEl = React.createRef();
  }

  handleChangeText = (event) => {
    if (this.props.handleChangeText && this.props.handleChangeText.constructor === Function) {
      this.props.handleChangeText(event, event.target.value);
    }
    console.log(event)
  };

  render() {
    return (
      <View>
        <Text
          style={[styles.smallText, styles.textStyle]}
          text={this.props.text}>{this.props.text}
        </Text>
        <View style={styles.containerInputField}>
          <TextInput
            autoCorrect={this.props.autoCorrect}
            ref={this.inputEl}
            placeholder={this.props.placeholder}
            placeholderTextColor="#BDBDBD"
            underlineColorAndroid="transparent"
            style={styles.textInput}
            clearButtonMode="always"
            onChangeText={(evt) => this.handleChangeText(evt)}
            defaultValue={this.props.value}
            readOnly={this.props.readOnly}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerInputField: {
    height: 40,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 200,
  },
  textStyle: {
    textAlign: 'left',
    marginLeft: 15,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textInput: {
    flex: 1,
    color: '#000',
  },
});
