import { NavigationContainer } from "@react-navigation/native";
import React,{useState} from "react";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";



export default function Routes({login, onSignIn,nailsalon,hairsalon,permissionStatus }) {
 


  return <>
        {login? <MainStack nailsalon = {nailsalon} hairsalon = {hairsalon} permissionStatus={permissionStatus}/>:<AuthStack onSignIn={onSignIn} />}

  </>;
}
