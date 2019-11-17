import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import Tavel from '../../components/travel/Travel';
import styles from './styles';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travels: [
        {
          id: 1,
          pickUp: 'aero guarulhos',
          dest: 'pulma',
          dateOc: '2019-10-13',
          hourOC: '17:15',
          driver: 'carlos',
          status: 'confirmado',
        },
        {
          id: 2,
          pickUp: 'pulma',
          dest: 'Aero guarulhos',
          dateOc: '2019-10-14',
          hourOC: '17:15',
          driver: 'carlos',
          status: 'pendente',
        },
        {
          id: 3,
          pickUp: 'pulma',
          dest: 'Aero guarulhos',
          dateOc: '2019-10-14',
          hourOC: '17:15',
          driver: 'carlos',
          status: 'negado',
        },
      ],
    };
  }

  render() {
    const {travels} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent={false} backgroundColor={'#dc9738'} />
        <View style={styles.listContainer}>
          <FlatList
            data={travels}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Tavel {...item} />}
          />
        </View>
        <View style={styles.fixedMenu}>
          <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.chatArea}>
            <TouchableOpacity style={styles.chatButton}>
              <Image
                style={{resizeMode: 'contain'}}
                source={require('../../../Assets/Icons/chat.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
