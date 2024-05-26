import React from 'react'
import Nav from '../Nav';
import "./ProfileScreen.css";
import {useSelector} from "react-redux";
import { selectUser } from '../features/UserSlice';
import {auth} from "../firebase"

function ProfileScreen() {
    const user = useSelector(selectUser);

  return (
    <div className = "ProfileScreen">
        <Nav />
        <div className = "ProfileScreen_Body">
            <h1> Edit Profile </h1>
            <div className="ProfileScreen_Info">
                <img src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <div className ="ProfileScreen_Details">
                    <h2>{user.email}</h2>
                    <div className="ProfileScreen_Plans">
                        <h3>Plans</h3>
                        <button onClick={() => {auth.signOut()}} className="ProfileScreen_SignOut">Sign Out</button>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProfileScreen