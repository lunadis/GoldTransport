import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export class Hall extends Component {
  render() {
    return (
      <View>
        <Text> Hall </Text>
        <Button
          title="Navegar para auth"
          onPress={() => this.props.navigation.navigate('auth')}
        />
      </View>
    );
  }
}

export default Hall;
