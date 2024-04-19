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
      backgroundColor:color.background,
      padding:moderateScale(28),
      backgroundColor:color.background,
      borderBottomEndRadius:moderateScale(80)  
          
     
      
      
    },
    view2:{
      
     
      alignItems:'center',
      padding:moderateScale(2),
    
     
      

    },
    view3:{
      
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center',
      flexWrap:'wrap',
   
      

  
    },
    userText:{
      
      fontSize:scale(15),
      color:color.textColor
    
    },
   
    locationview:{
      flexDirection:'row',
     
    },
    headingText:{
        fontSize:scale(18),
        color:color.textColor,
        fontStyle:'italic'
      
    },
    buttons:{borderWidth:moderateScale(1),width:'45%',padding:moderateScale(30),alignItems:'center',justifyContent:'center',
    borderRadius:moderateScale(60),margin:scale(8),borderColor:color.background,color:'white',height:scale(130)
    

}
  })
  export default styles;