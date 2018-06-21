import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput, View, Text } from 'react-native';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.inputEl = React.createRef();
  }

  onChange = event => {
    // console.log("Text Change: ", event)
    // if (this.props.onChange && this.props.onChange.constructor === Function) {
      this.props.onChange(event);
    // }
  };

  render() {
    return (
      <View>
        <Text
          // ref={this.props.name}
          // onClick={() => this.inputEl.current.focus()}
          style={[styles.smallText, styles.textStyle]}
          text={this.props.text}>{this.props.text}
        </Text>
        <View style={styles.containerInputField}>
          <TextInput
            type={this.props.type}
            name={this.props.name}
            autoCorrect={this.props.autoCorrect}
            autoFocus={this.props.autoFocus}
            ref={this.inputEl}
            placeholder={this.props.placeholder}
            placeholderTextColor="#BDBDBD"
            underlineColorAndroid="transparent"
            style={styles.textInput}
            clearButtonMode="always"
            onChangeText={(evt) => this.onChange(evt)}
            onBlur={(evt) => this.onChange(evt)}
            defaultValue={this.props.value}
            readOnly={this.props.readOnly}
          />
        </View>
        <Text
          style={[styles.smallText, styles.textErrorStyle]}
          errors={this.props.error}>{this.props.error}
        </Text>
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
  textErrorStyle: {
    color: 'red',
    textAlign: 'left',
    marginLeft: 15,
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
