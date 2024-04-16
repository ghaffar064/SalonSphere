import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import navigationStrings from "../constants/navigationStrings";
import TabRoutes from "./TabRoutes";
import {
  HairSalon,
  Home,
  HomeService,
  Makeup,
  NailSalon,
  Notification,
  SkinCare,
  Spa,
} from "../Screens";
import SearchBar from "../components/SearchBar";
import CustomizedHeader from "../components/CustomizedHeader";
import { View, Text, Button } from "react-native";
const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationStrings.TABROUTES}
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.NOTIFICATION}
        component={Notification}
      />

      <Stack.Screen
        name={navigationStrings.HAIRSALON}
        component={HairSalon}
        options={{
          title: "Search",
          headerShadowVisible: false,

          headerStyle: {
            backgroundColor: "#A020F0",
          },
          headerTintColor: "white",
          headerRight: () => (
            <Button
              onPress={() => alert("This is filter button!")}
              title="filter"
              color="black"
            />
          ),
        }}
      />
      <Stack.Screen name={navigationStrings.NAILSALON} component={NailSalon}
                   options={{
                    title: "Search",
                    headerShadowVisible: false,
          
                    headerStyle: {
                      backgroundColor: "#A020F0",
                    },
                    headerTintColor: "white",
                    headerRight: () => (
                      <Button
                        onPress={() => alert("This is filter button!")}
                        title="filter"
                        color="black"
                      />
                    ),
                  }}   
      
      />
      <Stack.Screen name={navigationStrings.MAKEUP} component={Makeup} 
             options={{
              title: "Search",
              headerShadowVisible: false,
    
              headerStyle: {
                backgroundColor: "#A020F0",
              },
              headerTintColor: "white",
              headerRight: () => (
                <Button
                  onPress={() => alert("This is filter button!")}
                  title="filter"
                  color="black"
                />
              ),
            }}
      
      
      />
      <Stack.Screen name={navigationStrings.SKINCARE} component={SkinCare} 
             options={{
              title: "Search",
              headerShadowVisible: false,
    
              headerStyle: {
                backgroundColor: "#A020F0",
              },
              headerTintColor: "white",
              headerRight: () => (
                <Button
                  onPress={() => alert("This is filter button!")}
                  title="filter"
                  color="black"
                />
              ),
            }}
      
      />
      <Stack.Screen name={navigationStrings.SPA} component={Spa}
           options={{
            title: "Search",
            headerShadowVisible: false,
  
            headerStyle: {
              backgroundColor: "#A020F0",
            },
            headerTintColor: "white",
            headerRight: () => (
              <Button
                onPress={() => alert("This is filter button!")}
                title="filter"
                color="black"
              />
            ),
          }}
      />
      <Stack.Screen
        name={navigationStrings.HOMESERVICE}
        component={HomeService}
        options={{
          title: "Search",
          headerShadowVisible: false,

          headerStyle: {
            backgroundColor: "#A020F0",
          },
          headerTintColor: "white",
          headerRight: () => (
            <Button
              onPress={() => alert("This is filter button!")}
              title="filter"
              color="black"
            />
          ),
        }}

      />
    </Stack.Navigator>
  );
}
