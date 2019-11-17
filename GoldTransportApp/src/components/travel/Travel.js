import React from 'react';
import {Text, View, TouchableWithoutFeedback, Alert} from 'react-native';
import Styles from './styles';
import moment from 'moment';
import 'moment/locale/pt-br';

export default props => {
  let status;
  switch (props.status) {
    case 'confirmado':
      status = <View style={[Styles.statusConfirmado]} />;
      break;
    case 'pendente':
      status = <View style={[Styles.statusPendente]} />;
      break;
    case 'negado':
      status = <View style={[Styles.statusNegado]} />;
      break;

    default:
      break;
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.colum1}>
        <Text>Destino: </Text>
        <Text>Embarque em: </Text>
        <Text>Data: </Text>
        <Text>Motorista: </Text>
      </View>
      <View style={Styles.colum2}>
        <Text style={Styles.TextData}>{props.dest}</Text>
        <Text style={Styles.TextData}>{props.pickUp}</Text>
        <Text style={Styles.TextData}>
          {moment(props.dateOc).local('pt-br').format('ll')} as: {props.hourOC}
        </Text>
        <Text style={Styles.TextData}>{props.driver}</Text>
      </View>
      <View style={Styles.colum3}>
        <Text>Status</Text>
        {status}
      </View>
    </View>
  );
};

{
  /* <TouchableWithoutFeedback onPress={() => Alert.alert('apertou','apertou na viagem')}>
<View >
  <Text>Viagem</Text>
</View>
</TouchableWithoutFeedback> */
}
