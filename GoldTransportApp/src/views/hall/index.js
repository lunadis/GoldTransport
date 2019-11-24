import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export class Hall extends Component {
  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    const json = await AsyncStorage.getItem('userData');
    const userData = JSON.parse(json) || {};
    if (userData.token) {
      axios.defaults.headers.common['Authorization'] = `bearer ${userData.token}`;
      this.props.navigation.navigate('home', userData);
    }
  };

  render() {
    return (
      <ImageBackground
        source={require('../../../Assets/backgound/bgCont.png')}
        style={styles.container}>
        <View style={styles.logoField}>
          <Image
            style={styles.logo}
            resizeMode={'contain'}
            source={require('../../../Assets/Icons/logo.png')}
          />
        </View>
        <Image source={require('../../../Assets/Icons/brush.png')} />
        <View style={styles.formContainer}>
          <TouchableOpacity
            style={styles.button}
            title="Entrar"
            onPress={() => this.props.navigation.navigate('auth')}>
            <Text style={styles.textButton}>Entar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            title="Cadastrar"
            onPress={() => this.props.navigation.navigate('signup')}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flagPraime}>
          <Image
            style={styles.logo}
            resizeMode={'contain'}
            source={require('../../../Assets/Icons/faixa.png')}
          />
        </View>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </ImageBackground>
    );
  }
}

export default Hall;
