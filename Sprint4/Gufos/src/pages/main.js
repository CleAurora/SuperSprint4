import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { isTSEnumMember } from '@babel/types';
import { FlatList } from 'react-native-gesture-handler'
import { ThemeContext } from 'react-navigation';
//import console = require('console');

class Main extends Component {
  // apresentar a lista de eventos

  constructor(props) {
    super(props);
    this.state = {
      eventos: [],
    };
  }

  //trazer os dados da api

  componentDidMount(){
    this._carregarEventos();
  }

  _carregarEventos = async () =>{
    await fetch('http://192.168.7.85:5000/api/eventos')
    .then(resposta => resposta.json())
    .then(data => this.setState({eventos:data}))
    .catch(erro => console.warn(erro));
  };
  render() {

    return (
      <FlatList
        data={this.state.eventos}
        keyExtractos={item => isTSEnumMember.idEvento}
        renderItem={item =>
          (
            <View>
              <Text>{item.titulo}</Text>
              <Text>{item.dataEvento}</Text>
            </View>
          )
        }
      />
    );
  }
}

export default Main;
