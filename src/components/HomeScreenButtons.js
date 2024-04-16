import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'
import {
    scale,
    verticalScale,
    moderateScale,
    moderateVerticalScale,
  } from "react-native-size-matters";

export default function HomeScreenButtons() {
  return (
    <>
       <TouchableOpacity style={{borderWidth:1,width:'45%',padding:40,alignItems:'center',justifyContent:'center',
          borderRadius:5,margin:moderateScale(8)
    
    }}>
       <Image source={imagePath.booking}/>
        <Text >
          Hair Salon
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderWidth:1,width:'45%',padding:40,alignItems:'center',
          borderRadius:5,margin:moderateScale(8)
    
    }}>
         <Text >
          Nail Salon
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderWidth:1,width:'45%',padding:40,alignItems:'center',
          borderRadius:5,margin:moderateScale(8)
    
    }}>
         <Text >
          Makeup
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderWidth:1,width:'45%',padding:40,alignItems:'center',
          borderRadius:5,margin:moderateScale(8)
    
    }}>
         <Text >
          Skin Care
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderWidth:1,width:'45%',padding:40,alignItems:'center',
          borderRadius:5,margin:moderateScale(8)
    
    }}>
         <Text >
          Spa
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderWidth:1,width:'45%',padding:40,alignItems:'center',
          borderRadius:5,margin:moderateScale(8)
    
    }}>
         <Text >
          Body Beauty
        </Text>
      </TouchableOpacity>
    </>
  )
}