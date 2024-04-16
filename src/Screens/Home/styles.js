import { StyleSheet} from 'react-native'

import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
 const styles = StyleSheet.create({

    container:{
      flex:1,
     
     
     
    },
  
    view1:{
    
      justifyContent:'center',
      backgroundColor:'#A020F0',
      padding:moderateVerticalScale(28),
          
     
      
      
    },
    view2:{
      
     
      alignItems:'center',
      padding:moderateVerticalScale(2)      
     
      

    },
    view3:{
      
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center',
      flexWrap:'wrap'

  
    },
    userText:{
      
      fontSize:scale(15),
     
     
  
  
  
    },
    locationText:{
  
    },
    locationview:{
      flexDirection:'row',
     
    },
    headingText:{
        fontSize:scale(18),
        color:'#A020F0',
      
    }
  })
  export default styles;