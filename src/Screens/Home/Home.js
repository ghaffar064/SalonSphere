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
          navigate:navigationStrings.HAIRSALON
        },
        
          {name:'Nail Salon',
          imagePath:imagePath.hairsalon,
          navigate:navigationStrings.NAILSALON
        },

          {name:'Makeup',
          imagePath:imagePath.hairsalon,
          navigate:navigationStrings.MAKEUP
        },
          {name:'Skin Care',
          imagePath:imagePath.hairsalon,
          navigate:navigationStrings.SKINCARE
        },
          {name:'Spa',
          imagePath:imagePath.hairsalon,
          navigate:navigationStrings.SPA
        },
          {name:'Home Service',
          imagePath:imagePath.hairsalon,
          navigate:navigationStrings.HOMESERVICE
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
         <BellIcon size={30} color={color.colortheme} fill={color.forground}/>
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
      
      onPress={()=>{navigation.navigate(data.navigate)}}
      >
        <Image source={data.imagePath}/>
          <Text style={{color:color.forground}}>
           {data.name}
          </Text>
        </TouchableOpacity>
    
    )}
     
     </View>
    </SafeAreaView>
  )
}
