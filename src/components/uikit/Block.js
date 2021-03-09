import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import {screenWidth, BLACK, WHITE, BLUE, FONT} from '../../../constants'
import {TouchableOpacity} from 'react-native-gesture-handler'

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: WHITE,
        shadowColor: BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        height:screenWidth * 0.50,
        marginTop: screenWidth * 0.02,
        borderRadius: 5,
    },
    viewS1:{
        flex:5,
        backgroundColor: WHITE,
        flexDirection: 'row',
        borderTopEndRadius: 5,
        borderTopStartRadius: 5,
    },
    viewS2:{
        flex:1,
        backgroundColor: BLUE,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewS3:{
        flex:1,
        backgroundColor: BLUE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomStartRadius: 5,
        borderBottomEndRadius: 5,
    },
    textStyle: {
        color: BLACK,
        fontSize: screenWidth * 0.038,
        fontFamily: FONT,
        margin:screenWidth * 0.01
    },
    imageStyle: {
        borderRadius: screenWidth * 0.10,
        width:screenWidth * 0.33,
        height:screenWidth * 0.33,
        margin:screenWidth * 0.015,
    },
    textStyle1: {
        color: BLACK,
        fontSize: screenWidth * 0.035,
        fontFamily: FONT,
        margin:screenWidth * 0.01,
        textAlign: 'justify'
    },
    viewT1:{
        flex:1,
    },
})


const Block = ({data, onPress}) => {
    const {image, name, info, rating, address, views} = data
    const {viewT1, textStyle1, viewStyle, textStyle, imageStyle, viewS3, viewS1, viewS2} = styles
    return (
        <TouchableOpacity
            accessibilityHint="Navigates to the previous screen"
            onPress={onPress}>
            <View style={viewStyle}>
                <View style={viewS1}>
                    <View style={viewT1}>
                        <Text ellipsizeMode="tail" numberOfLines={7} style={textStyle1}>{info}
                        </Text>
                    </View>
                    <Image source={{uri: image}} style={imageStyle}/>
                </View>
                <View style={viewS2}>
                    <Text style={textStyle}>{name}</Text>
                    <Text style={textStyle}>{address}</Text>
                </View>
                <View style={viewS3}>
                    <Text style={textStyle}>★ {rating}</Text>
                    
                    <Text style={textStyle}> 𓁺 {views}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )}


export {Block}
