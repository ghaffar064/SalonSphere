import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationStrings from "../constants/navigationStrings";
import { Booking, Home, NearBy, Profile } from "../Screens";
import { Image,View,Text } from "react-native";
import imagePath from "../constants/imagePath";
import color from "../constants/color";
const Tab = createBottomTabNavigator();
export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: color.forground,
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen
        name={navigationStrings.HOME}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ tintColor: focused ? color.forground : "grey" }}
                source={imagePath.home}
              />
            );
          },
        }}
        component={Home}
      />
      <Tab.Screen
        name={navigationStrings.NEARBY}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Image 
            style={{ tintColor: focused ? color.forground : "grey" }}
            source={imagePath.nearby} />;
          },
        }}
        component={NearBy}
      />
      <Tab.Screen
        name={navigationStrings.BOOKING}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Image 
            style={{ tintColor: focused ? color.forground : "grey" }}
            source={imagePath.booking} />;
          },
        }}
        component={Booking}
      />
      <Tab.Screen
        name={navigationStrings.PROFILE}
        
        options={{
         
          
          tabBarIcon: ({ focused }) => {
            return <Image 
            style={{ tintColor: focused ? color.forground : "grey" }}
            source={imagePath.profile} />;  
          
          },
        }}
      
        component={Profile}
      />
    </Tab.Navigator>
  );
}
