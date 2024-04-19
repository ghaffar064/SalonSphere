import { View, Text,Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import {
    scale,
    verticalScale,
    moderateScale,
    moderateVerticalScale,
  } from "react-native-size-matters";

export default function Shop() {
    const {
        params:{
            item
        }
    } = useRoute()
  return (
    <View style={{alignItems:'center',justifyContent:'center',margin:10}}>
      <Image source = {item.image} style={{
                         width: '100%',
                         height: moderateScale(200),

      }}/>

    </View>
  )
}