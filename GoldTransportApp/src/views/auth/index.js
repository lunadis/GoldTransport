import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../auth/styles';
import {server, showError} from '../../utils/Common/api/common';
import axios from 'axios';

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onLogin = async () => {
    try {
      const res = await axios.post(`${server}/client/signing`, {
        email: this.state.email,
        password: this.state.password,
      });

      // eslint-disable-next-line prettier/prettier
      axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`;
      AsyncStorage.setItem('userData', JSON.stringify(res.data));
      this.props.navigation.navigate('home');
    } catch (error) {
      Alert.alert('Erro no login', `O login apresentou erro => ${error}`);
    }
  };

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
              placeholder="**************"
              returnKeyType="go"
              onSubmitEditing={this.onLogin}
              onChangeText={password => this.setState({password})}
              ref={input => (this.senhaInput = input)}
            />
            <Image
              style={styles.icon}
              source={require('../../../Assets/Icons/password.png')}
            />
          </View>
          <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.button} onPress={this.onLogin}>
              <Text style={styles.textButton}>Começar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default Auth;
