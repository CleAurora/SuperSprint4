import React, {Component} from 'react';
import {Text, AsyncStorage, View} from 'react-native';

class Profile extends Component {

  constructor() {
    super();
    this.state = {
      token: ''
    }
  }

  // quando eu abrir o meu profile, quero buscar os dados do asyncStorage
  componentDidMount(){
    this._buscarDadosDoStorage();
  }

  _buscarDadosDoStorage = async() =>{
    try{
      const tokenDoStorage = await AsyncStorage.getItem('@gufos:token');
      if(tokenDoStorage != null){
        this.setState({token: tokenDoStorage})
      }
    }catch(error){

    }
  }


  render() {
    return(
      <Text>{this.state.token}</Text>
    );  
  }
}

export default Profile;
