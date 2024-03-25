import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './components/pages/SignIn';
import Splash from './components/pages/Splash';
import Register from './components/pages/Register';
import Verification from './components/pages/Verification';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
                        
            headerShown:false,

headerBackVisible: false,




} 
}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
                        
            headerShown:false,

headerBackVisible: false,




} 
}
         
        />
          <Stack.Screen
          name="Register"
          component={Register}
          options={{
                        
            headerShown:false,

headerBackVisible: false,




} 
}
          
         
        />

<Stack.Screen
          name="Verification"
          component={Verification}
          options={{
                        
            headerShown:false,

headerBackVisible: false,




} 
}
         
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}