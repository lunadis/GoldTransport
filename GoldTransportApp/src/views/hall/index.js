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

export class Hall extends Component {
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
            title="Entrar"
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
