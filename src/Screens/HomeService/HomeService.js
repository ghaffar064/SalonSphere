import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import SearchBar from '../../components/SearchBar'

import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import Cards from '../../components/Cards/Cards';

export default function HomeService() {
  return (
   <View style={{flex:1}}>
     <View style={{
        justifyContent:'center',
        backgroundColor:'#A020F0',
        padding:moderateVerticalScale(12),}}>
    <SearchBar placeholder={"Search home service"}/>
    
    </View>
    <Cards/>
   </View>
  )
}