import React, { useState,useEffect } from "react";
import Routes from "./src/Navigation/Routes";
import { Signin } from ".";
import AuthStack from "./src/Navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { nailsalon,hairsalon } from "./src/components/Dummydata";
export default function App() {

  const [login, setLogin] = useState(false)
  const handleSignIn = () => {
    setLogin(true);
  };
  const [permissionStatus, setPermissionStatus] = useState(null);

 
  return (
    <NavigationContainer>
      <Routes login={login}  onSignIn={handleSignIn} nailsalon = {nailsalon} hairsalon = {hairsalon} permissionStatus={permissionStatus}/>
   
    </NavigationContainer>
  );
}