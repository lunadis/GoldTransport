import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from '../auth/styles';

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <ImageBackground
        source={require('../../../Assets/backgound/bgCont.png')}
        style={styles.container}>
        <SafeAreaView>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputfild}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#385959"
              keyboardType="email-address"
              returnKeyType="next"
              autoCorrect={false}
              onSubmitEditing={() => this.senhaInput.focus()}
              onChangeText={email => this.setState({email})}
              placeholder="email@exemplo.com.br"
            />
            <Image
              style={styles.icon}
              source={require('../../../Assets/Icons/email.png')}
            />
          </View>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputfild}>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholderTextColor="#385959"
              placeholder='**************'
              onChangeText={password => this.setState({password})}
              ref={input => (this.senhaInput = input)}
            />
            <Image
              style={styles.icon}
              source={require('../../../Assets/Icons/password.png')}
            />
          </View>
          <TouchableOpacity>
            <Text>Login</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default Auth;
