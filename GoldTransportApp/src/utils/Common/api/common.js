import {Alert} from 'react-native';

const server = 'https://shrouded-taiga-74827.herokuapp.com'
//webserver heroku: https://powerful-sierra-29350.herokuapp.com
//const server = 'https://powerful-sierra-29350.herokuapp.com'
function showError(err) {
  Alert.alert('Ocorreu um erro!', `Mensagem: ${err}`);
}

export {server, showError}