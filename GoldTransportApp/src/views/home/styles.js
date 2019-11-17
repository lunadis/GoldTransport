import {StyleSheet} from 'react-native';
import metrics from '../../utils/Common/Styles/metrics';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginTop: metrics.statusBarHeight,
  },
  fixedMenu: {
    flexDirection: 'row',
    width: metrics.screenWidth,
    height: metrics.tabBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    marginTop: metrics.statusBarHeight + 5,
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    width: metrics.screenWidth,
    height:
      metrics.screenHeight -
      (metrics.tabBarHeight + metrics.statusBarHeight + 5),
  },
  buttonArea: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dc9738',
    borderRadius: 20,
    marginBottom: metrics.screenHeight / 80,
    width: metrics.screenWidth * 0.5,
    height: metrics.screenHeight * 0.07,
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Open Sans',
    fontSize: 45,
  },
  chatArea: {
    marginLeft: 30,
  },
  chatButton: {
    backgroundColor: '#40d535',
    borderRadius: 45,
    width: 60,
    alignItems: "center",
  },
});

export default styles;
