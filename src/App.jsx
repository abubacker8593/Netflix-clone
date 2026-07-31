import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Player from "./pages/Player";
  import { ToastContainer, toast } from 'react-toastify';
import {auth} from './firebase'
import { onAuthStateChanged } from "firebase/auth";
const App = () => {
  let navigate  = useNavigate()
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Logged in");
      navigate("/");
    } else {
      console.log("Logged out");
      navigate("/Login");
    }
    console.log("its working")
  });

  return () => unsubscribe();
}, []);
  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route index path="/Login" element={<Login />} />
        <Route path="/Player/:id" element={<Player />} />
      </Routes>
      
    </div>
  );
};


export default App;
