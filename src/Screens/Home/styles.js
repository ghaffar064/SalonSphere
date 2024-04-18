import { StyleSheet} from 'react-native'

import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import color from '../../constants/color';
 const styles = StyleSheet.create({

    container:{
      flex:1,
      backgroundColor:'white'
     
     
     
    },
  
    view1:{
     
      justifyContent:'center',
      backgroundColor:color.colortheme,
      padding:moderateVerticalScale(28),
      backgroundColor:color.colortheme,
      borderBottomEndRadius:moderateScale(80)  
          
     
      
      
    },
    view2:{
      
     
      alignItems:'center',
      padding:moderateVerticalScale(2),
    
     
      

    },
    view3:{
      
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center',
      flexWrap:'wrap',
   
      

  
    },
    userText:{
      
      fontSize:scale(15),
      color:color.forground
     
     
  
  
  
    },
   
    locationview:{
      flexDirection:'row',
     
    },
    headingText:{
        fontSize:scale(18),
        color:color.forground
      
    },
    buttons:{borderWidth:moderateScale(2),width:'45%',padding:moderateScale(30),alignItems:'center',justifyContent:'center',
    borderRadius:moderateScale(35),margin:moderateScale(8),borderColor:color.colortheme,color:'white',height:moderateVerticalScale(140)
    

}
  })
  export default styles;