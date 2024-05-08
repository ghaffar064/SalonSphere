import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import navigationStrings from "../constants/navigationStrings";
import TabRoutes from "./TabRoutes";
import { Home, Notification, Shop, Categories, MyAccount } from "../Screens";

import { View, Text, Button, TouchableOpacity } from "react-native";
import color from "../constants/color";
import {
  AdjustmentsHorizontalIcon,
  StarIcon,
} from "react-native-heroicons/outline";

const Stack = createNativeStackNavigator();

export default function MainStack({hairsalon,nailsalon,permissionStatus}) {
 
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
       {/* <Stack.Screen
        name={navigationStrings.TABROUTES}
        component={TabRoutes}
        options={{ headerShown: false }}
<<<<<<< HEAD
      /> */}
      <Stack.Screen  name={navigationStrings.TABROUTES} options={{ headerShown: false }}>

          {(props) => <TabRoutes {...props}  nailsalon = {nailsalon} hairsalon = {hairsalon} permissionStatus={permissionStatus}  />}
        </Stack.Screen>

      


      <Stack.Screen
        name={navigationStrings.NOTIFICATION}
        component={Notification}
      />

      <Stack.Screen
        name={navigationStrings.SHOP}
        component={Shop}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.CATEGORIES}
        component={Categories}
        options={{
          title: "Search",
          headerShadowVisible: false,

          headerStyle: {
            backgroundColor: color.background,
          },
          headerTintColor: color.foreground,
          headerRight: () => (
            <TouchableOpacity>
              <AdjustmentsHorizontalIcon size={25} color={color.foreground} />
            </TouchableOpacity>
          ),
        }}
      />
      {/* //profile Subscreens  */}
      <Stack.Screen
        name={navigationStrings.MYACCONT}
        component={MyAccount}
        options={{
          title: "My Account",
          headerShadowVisible: false,

          headerStyle: {
            backgroundColor: color.background,
          },
          headerTintColor: color.foreground,
        }}
      />
    </Stack.Navigator>
  );
}
