import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

export class Hall extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoField}>
          <Image
            style={styles.logo}
            resizeMode={'contain'}
            source={require('../../../Assets/Icons/logo.png')}
          />
        </View>
        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.button} title="Entrar">
            <Text>Entar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} title="Entrar">
            <Text>Cadastrar</Text>
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
      </SafeAreaView>
    );
  }
}

export default Hall;
