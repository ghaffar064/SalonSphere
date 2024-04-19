import { View, Text , TouchableOpacity,StyleSheet, SafeAreaView,Image,TextInput} from 'react-native'
import React from 'react'
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import imagePath from '../../constants/imagePath';
import GetLocation from '../../components/GetLocation';
import navigationStrings from '../../constants/navigationStrings';
import CustomizedTextInput from '../../components/CustomizedTextInput'
import SearchBar from '../../components/SearchBar';
import styles from './styles';
import HomeScreenButtons from '../../components/HomeScreenButtons';
import color from '../../constants/color';
import {BellIcon} from "react-native-heroicons/outline";
export default function Home({navigation}) {
      const data= [
        
        {name:'Hair Salon',
          imagePath:imagePath.hairsalon,
          navigate:navigationStrings.HAIRSALON,
          placeholder:"Search your hair salon"

        },
        
          {name:'Nail Salon',
          imagePath:imagePath.nailsalon,
          navigate:navigationStrings.NAILSALON,
          placeholder:"Search your nail salon"

        },

          {name:'Makeup',
          imagePath:imagePath.makeup,
          navigate:navigationStrings.MAKEUP,
          placeholder:"Search your makeup artist"
        },
          {name:'Skin Care',
          imagePath:imagePath.skincare,
          navigate:navigationStrings.SKINCARE,
          placeholder:"Search skin care products"
        },
          {name:'Spa',
          imagePath:imagePath.spa,
          navigate:navigationStrings.SPA,
          placeholder:"Search your spa"
        },
          {name:'Home Service',
          imagePath:imagePath.homeservice,
          navigate:navigationStrings.HOMESERVICE,
          placeholder:"Search home service"
        },
                         
                        
                        
                        ]

  return (
    <SafeAreaView style = {styles.container} >
     <View style = {styles.view1}>
       
     
         <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
         <View>
          <Text style = {styles.userText}>Hii Ghaffar, Lahore</Text>
         
          <GetLocation/>
       
         
          
          </View>
          <TouchableOpacity onPress={()=>{navigation.navigate(navigationStrings.NOTIFICATION) }}>
         <BellIcon size={30} color={color.background} fill={color.foreground}/>
          </TouchableOpacity>
         </View>
    
        <SearchBar placeholder={"Search"}/>
    
  {/**/}
      
     </View>
     <View style = {styles.view2}>
          <Text style={styles.headingText}>Welcome</Text>
          <Text style={styles.headingText}>What are you looking for?</Text>

     </View>
     <View style = {styles.view3}>
     {data.map((data,i)=>
            <TouchableOpacity style={styles.buttons}
      key={i}
      
      onPress={()=>{navigation.navigate(navigationStrings.CATEGORIES,{
        data
      })}}
      >
        <Image source={data.imagePath} style={{height:moderateVerticalScale(100),width:moderateScale(100)}}/>
          <Text style={{color:color.textColor}}>
           {data.name}
          </Text>
        </TouchableOpacity>
    
    )}
     
     </View>
    </SafeAreaView>
  )
}
