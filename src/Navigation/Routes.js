import { NavigationContainer } from "@react-navigation/native";
import React,{useState} from "react";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";



export default function Routes({login}) {


  return <NavigationContainer>{login? MainStack():AuthStack()}</NavigationContainer>;
}
