import {StyleSheet} from 'react-native';
import metrics from '../../utils/Common/Styles/metrics';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    marginBottom: 5,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FFF',
    width: metrics.screenWidth - 20,
  },
  colum1: {
    flexDirection: 'column',
  },
  colum2: {
    flexDirection: 'column',
    marginLeft: 5,
    justifyContent: 'center',
  },
  colum3: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:  50,
  },
  statusConfirmado: {
    marginTop: 10,
    backgroundColor: '#2e7d32',
    width: 50,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  statusPendente: {
    marginTop: 10,
    backgroundColor: '#ff3',
    width: 50,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  statusNegado: {
    marginTop: 10,
    backgroundColor: '#9b0000',
    width: 50,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  status:{
    fontSize: 9,
    color: '#fff',
  },
  TextData: {
    borderBottomColor: '#183939',
    borderBottomWidth: 0.3,
  },
});

export default styles;
