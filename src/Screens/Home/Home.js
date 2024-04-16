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
export default function Home({navigation}) {
      const data= [
        
        {name:'Hair Salon',
          imagePath:imagePath.home,
          navigate:navigationStrings.HAIRSALON
        },
        
          {name:'Nail Salon',
          imagePath:imagePath.home,
          navigate:navigationStrings.NAILSALON
        },

          {name:'Makeup',
          imagePath:imagePath.home,
          navigate:navigationStrings.MAKEUP
        },
          {name:'Skin Care',
          imagePath:imagePath.home,
          navigate:navigationStrings.SKINCARE
        },
          {name:'Spa',
          imagePath:imagePath.home,
          navigate:navigationStrings.SPA
        },
          {name:'Home Service',
          imagePath:imagePath.home,
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
          <Image source={imagePath.notification} />
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
            <TouchableOpacity style={{borderWidth:1,width:'45%',padding:40,alignItems:'center',justifyContent:'center',
            borderRadius:5,margin:moderateScale(8)
            
      
      }}
      key={i}
      
      onPress={()=>{navigation.navigate(data.navigate)}}
      >
        <Image source={data.imagePath}/>
          <Text style={{color:'#A020F0'}}>
           {data.name}
          </Text>
        </TouchableOpacity>
    
    )}
     
     </View>
    </SafeAreaView>
  )
}
