import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from './Component/Home'
import  Profile  from "react";
import Dashboard from 'react';
import  ErrorPage  from "./Component/Error";
// import { createContext } from "react";
import {useContext} from 'react'
 

  const Loggedin = () =>{

    <Router>
      <Routes>
        <Route index path = '/' element = {<Home/>}/>
     </Routes>
    </Router>
  }
   
  const AuthHan = () =>{
    const userHomeScreen = useContext(userHomeScreen)
    return userHomeScreen.isLoggedin ? <div><Loggedin/></div> : null
  }

//   const AuthHandler = () => {
//     const authCtx = useContext(Authcontext);
//     return authCtx.isLoggedIn ? <div><IfLog /></div> : <IfNotLog />
// }


 function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;