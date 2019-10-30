import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';


class SignIn extends Component {
 
  static navigationOptions = {
    header: null,
  };
  //constructor
  //state
  constructor(){
    super();
    this.state={
      email: 'admin@admin.com',
      senha: null,
    };
  }
  //enviar para a api
  _realizarLogin = async () =>{
    //console.warn(this.state.email + ' - ' + this.state.senha);
    fetch('http://192.168.7.85:5000/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        senha: this.state.senha,
      }),
    })
    .then(resposta => resposta.json())
    .then(data => this._irParaHome(data.token))
    .catch(erro => console.warn('deu ruim' + erro));
  };
  _irParaHome = async (tokenRecebido)=> {
    if(tokenRecebido != null){
      try{
        //salvar a inf no asyncStorage
        await AsyncStorage.setItem('@gufos:token', tokenRecebido);
        //redirecionar usuario
        this.props.navigation.navigate('MainNavigator')
      } catch (error){

      }
    }
  }

  render() {
    return (
      //email
      //senha
      //botao

      <View>
        <TextInput 
          placeholder="email" 
          //securityTextEntry 
          onChangeText={email => this.setState({email})}
        />
        <TextInput 
          placeholder="senha"
          onChangeText={senha => this.setState({senha})} 
        />
        <TouchableOpacity
          onPress={this._realizarLogin}
        >
          <Text>Login</Text>
          
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignIn;