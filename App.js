import React, { useState } from "react";
import Routes from "./src/Navigation/Routes";
import { Signin } from "./src/Screens";
import AuthStack from "./src/Navigation/AuthStack";

export default function App() {
  const [login, setlogin] = useState(true)
 
  return (
    <>
      <Routes login={login} />
   
    </>
  );
}