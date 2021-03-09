import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { screenWidth, WHITE, BLUE, BACK} from '../../constants'
import { Header, Block } from '../components/uikit'
import { OQYSHI_DETAILS } from '../routes'

const url = 'https://raw.githubusercontent.com/oqyshi/Oqyshi/master/dbb.json'

export default class HomeScreen extends Component {

  state = {
    title: 'OQYSHI',
    data: []
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      function swap(items, firstIndex, secondIndex){
        var temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
        }
      function partition(items, left, right) {
    
        var pivot   = items[Math.floor((right + left) / 2)],
            i       = left,
            j       = right;
    
    
        while (i <= j) {
    
            while (items[i].rating < pivot.rating) {
                i++;
            }
    
            while (items[j].rating > pivot.rating) {
                j--;
            }
    
            if (i <= j) {
                swap(items, i, j);
                i++;
                j--;
            }
        }
    
        return i;
        }
      function quickSort(items, left, right) {
    
        var index;
    
        if (items.length > 1) {
    
            left = typeof left != "number" ? 0 : left;
            right = typeof right != "number" ? items.length - 1 : right;
    
            index = partition(items, left, right);
    
            if (left < index - 1) {
                quickSort(items, left, index - 1);
            }
    
            if (index < right) {
                quickSort(items, index, right);
            }
    
        }
    
        return items;
        }
      quickSort(data).reverse();
      this.setState({ data })
    }
    catch (e) {
      throw e
    }
  }

  render() {
    const { title, data} = this.state
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
            {data.map(item => (
               <Block
                  data={item}
                  onPress={() => navigation.navigate(OQYSHI_DETAILS, (item))}
                  key={item.id} />
            ))}
            <View style={{height: screenWidth * 0.03}}/>

          </ScrollView>
        </View>
      </View>
    )
  }
}
