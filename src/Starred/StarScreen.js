import React, {Component} from 'react'
import { View, ScrollView} from 'react-native'
import { Header, Block} from '../components/uikit'
import { screenWidth, WHITE, BLUE, BACK} from '../../constants'
import { OQYSHI_DETAILS } from '../routes'
import * as firebase from "firebase"

const url = 'https://raw.githubusercontent.com/oqyshi/Oqyshi/master/dbb.json'



export default class Star extends Component {
  state = {
    title: 'STARRED',
    data: [],
    user: false,
    arr: [],
  }
    

  componentDidMount = async () => {
    try {
      firebase.auth().onAuthStateChanged(user => {this.setState({user})})
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })

      firebase.firestore().collection('users')
                  .get()
                  .then((snapshot) => {
                    snapshot.docs.forEach(doc => {
                      if (doc.data().text == (firebase.auth().currentUser || {}).email) 
                        { 
                          var arr = doc.data().org
                          this.setState({ arr })
                          
                        }
                    })
                  })

    }
    catch (e) {
      throw e
    }
  }

  render() {
    const { title, data, user} = this.state
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, backgroundColor: BACK }}>
        <Header detail
          title={title}
          headerColor={BLUE}
          leftIcon="ios-search"
          leftColor={WHITE}
          title={title} />
        <View style={{ flex: 25 }}>
          <ScrollView style={{ flex: 1, backgroundColor: BACK, paddingHorizontal: screenWidth * 0.02}}>
            {
              data.map(item => {
                if(!!user ){
                  if(this.state.arr.includes(item.id)){
                    return(<Block data={item}
                      onPress={() => navigation.navigate(OQYSHI_DETAILS, (item))}
                      key={item.id} />
                      )}
                
                }

              })
            }
            <View style={{height: screenWidth * 0.03}}/>

          </ScrollView>
        </View>
      </View>
    );
  }
  }