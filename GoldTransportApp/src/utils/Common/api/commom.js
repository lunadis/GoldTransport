import {Alert} from 'react-native';

const server = 'http://127.0.0.1:3000'
//webserver heroku: https://powerful-sierra-29350.herokuapp.com
//const server = 'https://powerful-sierra-29350.herokuapp.com'
function showError(err) {
  Alert.alert('Ocorreu um erro!', `Mensagem: ${err}`);
}

export {server, showError}