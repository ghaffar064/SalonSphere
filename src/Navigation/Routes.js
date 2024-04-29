import { NavigationContainer } from "@react-navigation/native";
import React,{useState} from "react";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";



export default function Routes({login, onSignIn }) {


  return <>
        {login? <MainStack/>:<AuthStack onSignIn={onSignIn}/>}

  </>;
}
