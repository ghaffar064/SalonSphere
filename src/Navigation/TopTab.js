import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import navigationStrings from '../constants/navigationStrings';
import  Services  from '../Screens/Services/Services';
import  Information  from '../Screens/Information/Information';
import  Reviews  from '../Screens/Reviews/Reviews';
import { NavigationContainer } from '@react-navigation/native';
import color from "../constants/color";
import { Image} from "react-native";
import imagePath from "../constants/imagePath";

const topTab = createMaterialTopTabNavigator();

export default function TopTab({services}) {
   
   
  return (
   

    
    <topTab.Navigator
    screenOptions={{
       
        
        headerShown: false,
        tabBarActiveTintColor: color.background,
        tabBarInactiveTintColor: "grey",
        tabBarIndicatorStyle: {
            backgroundColor: color.background,
            height: 3
          },
         
        
      }}
    
    >
      <topTab.Screen name={navigationStrings.SERVICES} component={Services} 
        initialParams={{ services }} 
                     

           
      
      />
      <topTab.Screen name={navigationStrings.INFORMATION} component={Information} 
       
      />
      <topTab.Screen name={navigationStrings.REVIEWS} component={Reviews} />
    </topTab.Navigator>

  
   
  );
}