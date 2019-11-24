import {StyleSheet} from 'react-native';
import metrics from '../../utils/Common/Styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.screenWidth,
    height: metrics.screenHeight - metrics.statusBarHeight,
    backgroundColor: '#111C26',
    fontFamily: 'Open Sans',
    resizeMode: 'contain',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dc9738',
    borderRadius: 20,
    marginBottom: metrics.screenHeight / 25,
    width: metrics.screenWidth * 0.5,
    height: metrics.screenHeight * 0.1,
  },
  textButton: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
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
