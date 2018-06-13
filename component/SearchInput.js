import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class SearchInput extends React.Component {
  render() {
    return (
      <View style={styles.containerSearchInput}>
        <TextInput
          autoCorrect={false}
          placeholder={this.props.placeholder}
          placeholderTextColor="#BDBDBD"
          underlineColorAndroid="transparent"
          style={styles.textInput}
          clearButtonMode="always"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerSearchInput: {
    height: 40,
    marginTop: 20,
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
    textInput: {
    flex: 1,
    color: '#000',
  },
});
