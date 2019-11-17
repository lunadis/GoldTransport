import {StyleSheet} from 'react-native';
import metrics from '../../utils/Common/Styles/metrics';
import { bold } from 'ansi-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: '#111C26',
    fontFamily: 'Open Sans',
    resizeMode: 'contain',
  },
  label:{
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFF'
  },
  inputfild:{
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    height: 40,
    width: metrics.screenWidth / 1.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },  
  input:{
    width: metrics.screenWidth / 1.9,
    color: '#fff',
    fontSize: 16,
  },
  buttonArea:{
    marginTop: 20, 
    flexDirection: "row",
    justifyContent: "center",
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dc9738',
    borderRadius: 20,
    marginBottom: metrics.screenHeight / 80,
    width: metrics.screenWidth * 0.5,
    height: metrics.screenHeight * 0.07,
  },
  textButton:{
    color: '#fff',
    fontFamily: "Open Sans",
    fontWeight: "bold",
  },
  icon:{
    width: 25,
    height: 25,
  },
});

export default styles;
