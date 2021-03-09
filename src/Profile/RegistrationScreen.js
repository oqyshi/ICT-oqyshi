import React, {Component} from 'react'
import {Text, View, Image, TextInput, StyleSheet, ScrollView} from 'react-native'
import { WHITE, BLUE, BACK, BLACK, FONT, screenWidth} from '../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LOGIN_HOME } from '../routes'
import * as firebase from "firebase"


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      phone: '', 
      password: '', 
      username: '', 
      email: '',
      password2 : ''}
  }

  handleSignUp = async() => {
    try {
      if (this.state.password != this.state.password2) throw new Error('Passwords are different')
      await firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
          
          return userCredentials.user.updateProfile({
              displayName: this.state.username
          });
      })
      .catch(error => {throw new Error(error.message)})
    }
    catch(e){
      alert(e)
  }
    
};
  
  render() {
    const {viewStyle,viewStyle1, imageStyle, textinpStyle, textStyle,textStyle1, buttonStyle} = styles
    const { navigation } = this.props
    return (
      <ScrollView>
        <View style={viewStyle}>
          <Image style={imageStyle} source={require('../images/logo.png')}/>
          <Text style={textStyle}> Придумайте имя пользователя</Text>
          <TextInput
            placeholder="Username"
            autoCorrect={false}
            autoCapitalize={"none"}
            style={textinpStyle} 
            onChangeText={username  => this.setState({ username })}
            value={this.state.username}/>
          <Text style={textStyle}> Введите ваш E-mail</Text>
          <TextInput
            placeholder={'E-mail@mail.oq'}
            keyboardType="email-address"
            contrast={true}
            autoCapitalize={"none"}
            onChangeText={email => this.setState({ email })}
            autoCorrect={false}
            value={this.state.email}
            style={textinpStyle} />
          <Text style={textStyle}> Введите ваш номер</Text>
          <TextInput
            placeholder={'+77007000000'}
            keyboardType="phone-pad"
            onChangeText={phone => this.setState({ phone })}
            value={this.state.phone}
            style={textinpStyle} />
          <Text style={textStyle}> Придумайте пароль</Text>
          <TextInput
            placeholder={'Password'}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            autoCapitalize="none"
            style={textinpStyle}
            secureTextEntry />
          <Text style={textStyle}> Повторите пароль</Text>
          <TextInput
            placeholder={'Repeat password'}
            onChangeText={password2 => this.setState({ password2 })}
            value={this.state.password2}
            style={textinpStyle}
            secureTextEntry
            autoCapitalize="none"
            />
          <View style={viewStyle1}>
            <TouchableOpacity style={buttonStyle}
              onPress={this.handleSignUp}>
              <Text style={textStyle1}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={buttonStyle}
              onPress={async () => { 
                navigation.navigate(LOGIN_HOME, 1)}}>
              <Text style={textStyle1}>    LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle1: {
    flexDirection: "row",
    alignItems: 'center'
  },
  viewStyle: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  imageStyle: {
    width: screenWidth * 0.9,
    height: screenWidth * 0.9,
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
    marginBottom: screenWidth * 0.01,
    marginLeft: - screenWidth * 0.08
  },
  textStyle1: {
    width: screenWidth * 0.3,
    color: BLACK,
    fontSize: screenWidth * 0.038,
    fontFamily: FONT,
    marginLeft: screenWidth * 0.1
  },
  buttonStyle:{
    margin: 10,
    borderRadius: 10,
    backgroundColor:BLUE
  }
})