import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Alert,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {mensagem: 'a'};
  }

  _aoClicar = () => {
    Alert.alert(
      'Alerta',
      this.state.mensagem,
      [
        {
          text: 'Oi',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  render() {
    return (
      <Fragment>
        {/* <StatusBar  backgroundColor="blue" barStyle="light-content" /> */}
        <StatusBar hidden />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.home}>
              <Text style={styles.texto}>Hello World</Text>
              <TextInput
                style={{height: 40}}
                placeholder="Digite aqui o nome!"
                onChangeText={mensagem => this.setState({mensagem})}
                value={this.state.mensagem}
              />
              <Button onPress={this._aoClicar} title="OK!" color="#00a458" />
              <Text>{this.state.mensagem}</Text>

              <Image
                style={{width: 300, height: 50}}
                source={require('./logo.png')}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    display: 'flex',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  texto: {
    backgroundColor: 'blue',
    color: 'yellow',
    height: 100,
  },
});
