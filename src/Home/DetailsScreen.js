import React, {PureComponent} from 'react'
import {View, StyleSheet, ScrollView, Text, TouchableOpacity} from 'react-native'
import {Header, Slider} from '../components/uikit'
import {WHITE, BLUE, BACK, BLACK, FONT} from '../../constants'
import Fire from "../../Fire";

const firebase = require("firebase");
require("firebase/firestore");
      

const styles = StyleSheet.create({
  h1: {
    fontFamily: FONT,
    fontSize: 30,
    padding: 15,
    textAlign: 'center'
  },
  h2: {
    fontFamily: FONT,
    fontSize: 15,
    textAlign: 'justify',
    color: BLACK,
    paddingHorizontal: 15
  }
})


export default class DetailsScreen extends PureComponent {
  componentDidMount = async () => {
  }

  handlePost = () => {
    var user_id = 0;
    var arr = [];
    var flag = 1;
    firebase.firestore().collection('users')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach(doc => {
          if (doc.data().text == (firebase.auth().currentUser || {}).email){ 
            flag = 0
            user_id = doc.id
            arr = doc.data().org
            if(user_id)
              if (user_id){
                if(arr.includes(this.props.navigation.state.params.id)){
                  arr.pop(this.props.navigation.state.params.id)
                  firebase.firestore().collection('users').doc(user_id).update({
                    org:arr})
                  }
                else{
                  arr.push(this.props.navigation.state.params.id)
                  firebase.firestore().collection('users').doc(user_id).update({
                  org:arr})
                }
              }} 
            if(flag){
              Fire.shared
                .addPost({ text: (firebase.auth().currentUser || {}).email, orgs: [this.props.navigation.state.params.id]})
                .catch(error => {
                    alert(error);
                });
              }
          })
        })
        
   
  }

  render() {
    const {image, name, info, id} = this.props.navigation.state.params
    const {navigation} = this.props
    const {h1, h2} = styles

    return (
      <View style={{ flex: 1, backgroundColor: BACK }}>
        <Header
          detail
          title={name}
          onPress={() => navigation.goBack()}
          leftIcon="ios-arrow-back"
          headerColor={BLUE}
          leftColor={WHITE} />
          
        <View style={{ flex: 25 }} >

          <ScrollView>
            <TouchableOpacity onPress={this.handlePost}>
            <Slider image={image}/> 
            </TouchableOpacity>
            <Text style={h1}>{name.toUpperCase()}</Text>
          
            <Text style={h2}>{info.replace(/<[^>]+>/g, '')}</Text>
          </ScrollView>
        </View> 
      </View>
    )
  }
}