import {StyleSheet} from 'react-native';
import metrics from '../../utils/Common/Styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: '#111C26',
    fontFamily: 'Open Sans',
    resizeMode: 'contain',
  },
  header: {
    alignItems: 'center',
    marginTop: metrics.tabBarHeight - 25,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#dc9738',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SubmitButton: {
    backgroundColor: '#395',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: metrics.screenWidth - 80,
  },
  text: {
    fontFamily: 'Open Sans',
    fontSize: 19,
    color: '#fff',
    marginLeft: (metrics.screenWidth - 170) / 2,
  },
  textForm: {
    color: '#fff',
    fontFamily: 'Open Sans',
    fontSize: 16,
  },
  inputForm: {
    borderColor: '#fff',
    borderBottomWidth: 1,
    width: metrics.screenWidth - 100,
    color: '#fff',
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  form: {
    marginTop: 15,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
