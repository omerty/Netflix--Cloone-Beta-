import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import {auth} from "./firebase";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './Screens/LoginScreen';
import {useDispatch, useSelector} from "react-redux";
import { login, logout, selectUser } from './features/UserSlice';
import ProfileScreen from './Screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      console.log("userAuth:", userAuth);
      if(userAuth)
      {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else
      {
        //Logged Out 
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        {!user ? (<LoginScreen />) : 
        (<Routes>
          <Route path="/" element={<HomeScreen/>}>
          </Route>
          <Route path="/ProfileScreen" element={<ProfileScreen />} />
          </Routes> 
        )};
    </Router>
    </div>
  );
}

export default App;
