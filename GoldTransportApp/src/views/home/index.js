import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
  Alert,
} from 'react-native';
import moment from 'moment';
import axios from 'axios';
import {server, showError} from '../../utils/Common/api/common';
import Tavel from '../../components/travel/Travel';
import AddTravel from '../../components/addTravels/AddTravel';
import styles from './styles';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travels: [],
      showAddTravel: false,
    };
  }
  componentDidMount = async () => {
    this.loadTravels();
  };
  addTravel = async Travels => {
    console.log(JSON.stringify(Travels));
    const date = moment(Travels.date)
      .locale('pt-br')
      .format('YYYY-MM-DD');
    try {
      await axios.post(`${server}/travel`, {
        pickUp: Travels.pickUp,
        dest: Travels.dest,
        dateOc: date,
        hourOC: '17:30',
      });
      this.setState({showAddTravel: false}, this.loadTravels);
    } catch (err) {
      showError(err);
    }
  };

  loadTravels = async () => {
    try {
      const res = await axios.get(`${server}/travel`);
      this.setState({travels: res.data});
    } catch (err) {
      showError(err);
    }
  };

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
            <TouchableOpacity
              onPress={() => {
                this.setState({showAddTravel: true});
              }}
              style={styles.button}>
              <AddTravel
                isVisible={this.state.showAddTravel}
                onCancel={() => this.setState({showAddTravel: false})}
                onSave={this.addTravel}
              />
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
