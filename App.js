import React, { useState } from "react";
import Routes from "./src/Navigation/Routes";
import { Signin } from ".";
import AuthStack from "./src/Navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const [login, setlogin] = useState(true)
 
  return (
    <NavigationContainer>
      <Routes login={login} />
   
    </NavigationContainer>
  );
}