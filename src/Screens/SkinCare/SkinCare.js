import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import SearchBar from '../../components/SearchBar'

import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import Cards from '../../components/Cards/Cards';
import color from '../../constants/color';

export default function SkinCare() {
  return (
    <View style={{flex:1}}>
    <View style={{
       justifyContent:'center',
       backgroundColor:color.colortheme,
       padding:moderateVerticalScale(12),
       borderBottomEndRadius:moderateScale(80)
       }}>
   <SearchBar placeholder={"Search product"}/>
   
   </View>
   <Cards/>
  </View>
  )
}