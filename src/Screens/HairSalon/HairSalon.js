import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import SearchBar from '../../components/SearchBar'
import Cards from '../../components/Cards/Cards';

import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

export default function HairSalon() {
  return (
    <View style={{flex:1}}>
     <View style={{
        justifyContent:'center',
        backgroundColor:'#A020F0',
        padding:moderateVerticalScale(12),}}>
    <SearchBar placeholder={"Search your salon"}/>
    
    </View>
    <Cards/>
   </View>
  )
}