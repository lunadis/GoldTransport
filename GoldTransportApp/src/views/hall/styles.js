import {StyleSheet} from 'react-native';
import metrics from '../../utils/Common/Styles/metrics';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: Colors.dark,
    fontFamily: 'Open Sans',
  },
  formContainer: {},
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dc9738',
    borderRadius: 10,
    marginBottom: metrics.screenHeight / 50,
    width: metrics.screenWidth * 0.5,
    height: metrics.screenHeight * 0.1,
  },
  logoField: {
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.screenWidth,
    height: metrics.screenHeight / 5,
  },
  logo: {
    width: metrics.screenWidth,
  },
});

export default styles;
