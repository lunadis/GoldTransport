import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  DatePickerIOS,
  DatePickerAndroid,
  Platform,
  TouchableOpacity,
  Picker,
} from 'react-native';
import styles from './styles';
import moment from 'moment';

const initialState = {
  dest: '',
  pickUp: '',
  date: new Date(),
  CarType: [
    {id: 1, value: 'sedan'},
    {id: 3, value: 'hatch'},
    {id: 4, value: 'suv'},
    {id: 5, value: 'Mini-Van'},
  ],
  SelectCartype: 'sedan',
};

export default class AddTravel extends Component {
  state = {
    dest: '',
    pickUp: '',
    date: new Date(),
    CarType: [
      {id: 1, value: 'sedan'},
      {id: 3, value: 'hatch'},
      {id: 4, value: 'suv'},
      {id: 5, value: 'Mini-Van'},
    ],
    SelectCartype: 'sedan',
  };

  save = () => {
    const data = {...this.state};
    this.props.onSave(data);
    this.setState({...initialState});
  };

  handleDateAndroidChanged = () => {
    DatePickerAndroid.open({
      date: this.state.date,
    }).then(e => {
      if (e.action !== DatePickerAndroid.dismissedAction) {
        const momentDate = moment(this.state.date);
        momentDate.date(e.day);
        momentDate.month(e.month);
        momentDate.year(e.year);
        this.setState({date: momentDate.toDate()});
      }
    });
  };

  render() {
    const {CarType} = this.state;

    let pickeritem = CarType.map(item => {
      return (
        <Picker.Item key={item.id} label={item.value} value={item.value} />
      );
    });

    let datePicker = null;
    if (Platform.OS === 'ios') {
      datePicker = (
        <DatePickerIOS
          mode="date"
          date={this.state.date}
          onDateChange={date => this.setState({date})}
        />
      );
    } else {
      datePicker = (
        <TouchableOpacity onPress={this.handleDateAndroidChanged}>
          <Text style={styles.date}>
            {moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')}
          </Text>
        </TouchableOpacity>
      );
    }

    return (
      <Modal
        onRequestClose={this.props.onCancel}
        visible={this.props.isVisible}
        animationType="fade"
        transparent={true}>
        <View>
          <TouchableWithoutFeedback onPress={this.props.onCancel}>
            <View style={{height: 30}} />
          </TouchableWithoutFeedback>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text
                style={{marginLeft: 90, fontSize: 16, fontFamily: 'Open Sans'}}>
                Programe sua viagem
              </Text>
              <TouchableWithoutFeedback onPress={this.props.onCancel}>
                <Image
                  style={{marginLeft: 80}}
                  source={require('../../../Assets/Icons/close.png')}
                />
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.form}>
              <View style={styles.inputForm}>
                <Text style={styles.label}>Destino</Text>
                <TextInput
                  onChangeText={dest => this.setState({dest})}
                  style={styles.inputText}
                />
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.label}>Embarque em</Text>
                <TextInput
                  onChangeText={pickUp => this.setState({pickUp: pickUp})}
                  style={styles.inputText}
                />
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.label}>Data:</Text>
                {datePicker}
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.label}>Tipo de carro</Text>
                <Picker
                  selectedValue={this.state.SelectCartype}
                  onValueChange={(itemValue, itemPosition) => {
                    this.setState({SelectCartype: itemValue});
                  }}>
                  {pickeritem}
                </Picker>
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.label}>Obersvações</Text>
                <TextInput style={styles.inputText} />
              </View>
            </View>
            <View style={styles.buttonArea}>
              <TouchableOpacity style={styles.button} onPress={this.save}>
                <Text style={styles.textButton}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableWithoutFeedback onPress={this.props.onCancel}>
            <View style={{height: 80}} />
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    );
  }
}
