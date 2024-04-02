import React from "react";
import { Signin, Signup, ForgotPassword, CodeVerification } from "../Screens";
import navigationStrings from "../constants/navigationStrings";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChangePassword from "../Screens/ChangePassword/ChangePassword";
const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={navigationStrings.SIGNIN} component={Signin} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={Signup} />
      <Stack.Screen
        name={navigationStrings.FORGOTPASSWORD}
        component={ForgotPassword}
      />
            <Stack.Screen
        name={navigationStrings.CODEVERIFICATION}
        component={CodeVerification}
      />
        <Stack.Screen
        name={navigationStrings.CHANGEPASSWORD}
        component={ChangePassword}
      />
      

    </Stack.Navigator>
  );
}