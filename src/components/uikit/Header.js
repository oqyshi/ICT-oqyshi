import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {screenWidth, WHITE, BLACK, BLUE, FONT} from '../../../constants'

const styles = StyleSheet.create({
  viewStyle: {
    flex:3,
    backgroundColor: BLUE,
    shadowColor: BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    flexDirection:'row',
    alignItems:'flex-end',
  },
  textStyle: {
    color: WHITE,
    fontSize: screenWidth * 0.08,
    fontFamily: FONT,
    width: screenWidth * 0.9
  }
})



const Header = ({detail, leftIcon, leftColor, headerColor, title, onPress}) => {
  const {viewStyle, textStyle} = styles
  return (
    <View style={[viewStyle, {paddingLeft: detail ? 0 : screenWidth * 0.02,
      backgroundColor:headerColor}]}>
      {leftIcon && (
        <TouchableOpacity onPress={onPress}>
          <Ionicons 
            name={leftIcon} 
            style={{marginLeft: detail ? screenWidth * 0.02 : screenWidth * 0.1, fontSize: screenWidth * 0.085,
              marginBottom:screenWidth * 0.007}} 
            color={leftColor} />
        </TouchableOpacity>
      )}
      
      <View>
        <Text numberOfLines={1} 
        ellipsizeMode="tail"
        style={[textStyle, {paddingLeft: leftIcon ? screenWidth * 0.02 : 0}]}>
        {title}
        </Text>
      </View>
    </View>
  )


}
export {Header}
