import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import {screenWidth, WHITE, BLACK, FONT} from '../../../constants'

const styles = StyleSheet.create({
    viewStyle: {
      height: screenWidth * 0.5,
      width: screenWidth,
      backgroundColor: WHITE,
      shadowColor: BLACK,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      marginTop: screenWidth * 0.01
    },
    textStyle: {
      color: WHITE,
      fontSize: screenWidth * 0.08,
      fontFamily: FONT,
      width: screenWidth * 0.9
    },
    imageStyle: {
      width:screenWidth * 1,
      height:screenWidth * 0.50,
  }
})


const Slider = ({title, image}) => {
    const { viewStyle, textStyle, imageStyle } = styles
    return (
        <View style={viewStyle}>
          <Image source={{uri: image}} style={imageStyle}/>
        </View>
    )


}

export {Slider}