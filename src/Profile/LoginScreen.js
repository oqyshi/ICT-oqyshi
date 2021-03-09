import React, {Component} from 'react'
import {Text, View, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import { WHITE, BLUE, BACK, BLACK, FONT, screenWidth} from '../../constants'
import { REGISTRATION, PROFILE_HOME } from '../routes'
import * as firebase from "firebase"
export default class App extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.state = { password: '' };
  }
  
 handleLogin = async() => {

      const { email, password } = this.state;
      try {
        await firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .catch(error => {throw new Error(error.message)})
          }
      catch(e){
        alert(e)
      
      } 
};

  render() {
    const {viewStyle, imageStyle, textinpStyle, textStyle, textStyle1, viewStyle1, buttonStyle} = styles
    const { navigation } = this.props
    return (
      <View
        style={viewStyle}>
        <Image style={imageStyle} source={require('../images/logo.png')}/>

        <Text style={textStyle}>
          LOGIN
        </Text>

        <TextInput
          placeholder="E-mail"
          style={textinpStyle}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          autoCorrect={false}
          autoCapitalize={"none"}
        />

        <TextInput
          placeholder={'Password'}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          style={textinpStyle}
          autoCapitalize={"none"}
          secureTextEntry={true} />

        <View style={viewStyle1}>
        <TouchableOpacity style={buttonStyle}
        onPress={this.handleLogin}>
          <Text style={textStyle1}>   LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyle}
        onPress={async () => { 
            navigation.navigate(REGISTRATION, 1)}}>
          <Text style={textStyle1}>REGISTER</Text>
        </TouchableOpacity>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
  textinpStyle: {
    borderWidth: 1,
    width: screenWidth * 0.9,
    height: screenWidth * 0.05,
    borderRadius: 5,
    marginBottom: screenWidth * 0.03,
    paddingLeft: 10
  },
  textStyle: {
    width: screenWidth * 0.9,
    color: BLACK,
    fontSize: screenWidth * 0.038,
    fontFamily: FONT,
    marginBottom: screenWidth * 0.01
  },
  textStyle1: {
    width: screenWidth * 0.4,
    color: BLACK,
    fontSize: screenWidth * 0.038,
    fontFamily: FONT,
    paddingLeft: screenWidth * 0.1, 
  },
  buttonStyle:{
    margin: 10,
    borderRadius: 10,
    backgroundColor:BLUE
  },
  viewStyle1: {
    flexDirection: "row",
    alignItems: 'center'
  },
})