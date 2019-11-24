import {StyleSheet} from 'react-native';
import metrics from '../../utils/Common/Styles/metrics';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: metrics.screenWidth,
    height: metrics.screenHeight - 100,
    borderRadius: 30,
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowOffset: {width: 50, height: 50},
    shadowOpacity: 0.8,
  },
  header: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  form: {
    margin: 15,
  },
  inputForm: {},
  inputText: {
    fontSize: 16,
    marginTop: -10,
    paddingBottom: -10,
    borderBottomWidth: 0.6,
    width: metrics.screenWidth - 80,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Open Sans',
  },
  buttonArea: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1faa00',
    borderRadius: 20,
    marginBottom: metrics.screenHeight / 80,
    width: metrics.screenWidth * 0.5,
    height: metrics.screenHeight * 0.07,
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Open Sans',
    fontSize: 25,
  },
});

export default styles;
