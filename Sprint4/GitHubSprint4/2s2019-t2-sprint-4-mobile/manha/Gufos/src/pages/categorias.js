import React, { Component, Fragment } from 'react';
import { Text, View, } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    this._carregarCategorias();
  }

  _carregarCategorias = async () => {
    await fetch('http://192.168.7.85:5000/api/categorias')
      .then(resposta => resposta.json())
      .then(data => this.setState({ categorias: data }))
      .catch(erro => console.warn(erro));
  };

  render() {
    return (
      <Fragment>
        <Text>Categorias</Text>
        <FlatList
          data={this.state.categorias}
          keyExtractor={item => item.idCategoria}
          renderItem={({ item }) => (
            <View>
              <Text>{item.titulo}</Text>
              <Text>{item.nome}</Text>
            </View>
          )}
        />
      </Fragment>
    );
  }
}

