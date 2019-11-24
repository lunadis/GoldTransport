import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import styles from './styles';
import axios from 'axios';
import {server, showError} from '../../utils/Common/api/common';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: 0,
      telephone: '',
      password: '',
      validPass: '',
      passForm: false,
    };
  }

  changeForm = () => {
    this.setState({passForm: true});
  };

  goBack = () => {
    if (this.state.passForm === true) {
      this.setState({passForm: false});
    } else {
      this.props.navigation.navigate('hall');
    }
  };

  onSignup = async () => {
    const {name, email, cpf, telephone, password, validPass} = this.state;
    if (password === validPass) {
      try {
        await axios.post(`${server}/client/signup`, {
          name: name,
          doc: cpf,
          email: email,
          phone: telephone,
          password: password,
        });
        this.props.navigation.navigate('auth');
      } catch (error) {
        showError(error);
      }
    } else {
      Alert.alert('Ops, erro no cadastro', 'As senhas não são iguais');
    }
  };

  render() {
    const {passForm} = this.state;

    let form;
    if (passForm === false) {
      //Form 1
      form = (
        <SafeAreaView style={styles.form}>
          <View>
            <Text style={styles.textForm}>Nome</Text>
            <TextInput
              placeholder="Seu nome"
              placeholderTextColor="#385959"
              textAlignVertical="bottom"
              onChangeText={name => this.setState({name})}
              style={styles.inputForm}
            />
          </View>
          <View>
            <Text style={styles.textForm}>E-mail</Text>
            <TextInput
              placeholder="exemplo@exemplo.com.br"
              placeholderTextColor="#385959"
              textAlignVertical="bottom"
              onChangeText={email => this.setState({email})}
              style={styles.inputForm}
            />
          </View>
          <View>
            <Text style={styles.textForm}>CPF</Text>
            <TextInput
              placeholder="226.155.449-36 (sem pontos)"
              placeholderTextColor="#385959"
              textAlignVertical="bottom"
              onChangeText={cpf => this.setState({cpf})}
              style={styles.inputForm}
            />
          </View>
          <TouchableOpacity
            onPress={this.changeForm}
            style={styles.SubmitButton}>
            <Text style={{color: '#fff'}}>►</Text>
          </TouchableOpacity>
        </SafeAreaView>
      );
    } else {
      //Form2
      form = (
        <SafeAreaView style={styles.form}>
          <View>
            <Text style={styles.textForm}>Telefone</Text>
            <TextInput
              placeholder="11999999999 (sem pontos)"
              placeholderTextColor="#385959"
              textAlignVertical="bottom"
              onChangeText={telephone => this.setState({telephone})}
              style={styles.inputForm}
            />
          </View>
          <View>
            <Text style={styles.textForm}>Senha</Text>
            <TextInput
              placeholder="**************"
              placeholderTextColor="#385959"
              textAlignVertical="bottom"
              onChangeText={password => this.setState({password})}
              style={styles.inputForm}
            />
          </View>
          <View>
            <Text style={styles.textForm}>Confirme a Senha</Text>
            <TextInput
              placeholder="***************"
              placeholderTextColor="#385959"
              textAlignVertical="bottom"
              onChangeText={validPass => this.setState({validPass})}
              style={styles.inputForm}
            />
          </View>
          <TouchableOpacity onPress={this.onSignup} style={styles.SubmitButton}>
            <Text style={{color: '#fff'}}>OK</Text>
          </TouchableOpacity>
        </SafeAreaView>
      );
    }

    return (
      <ImageBackground
        source={require('../../../Assets/backgound/bgCont.png')}
        style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <View style={styles.header}>
          <TouchableOpacity onPress={this.goBack} style={styles.button}>
            <Text style={{color: '#fff'}}>◄</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.text}>Cadastro</Text>
          </View>
        </View>
        {form}
      </ImageBackground>
    );
  }
}

export default Signup;
