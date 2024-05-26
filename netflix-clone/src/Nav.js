import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import "./Nav.css";

function Nav() {
const [show, handleShow] = useState(false);
const history = useNavigate()

const transitionNavBar = () => 
{
    if(window.scrollY > 100)
    {
        handleShow(true);
    }else
    {
        handleShow(false);
    }
}

useEffect(() =>
{
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
}, [])

  return (
    <div className = {`Nav ${show && 'Nav_Black'}`}>
        <div className ="Nav_Contents">
            <img onClick = {() => history("/")}
            className = "Netflix_Logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />;
           
            <img 
            onClick = {() => history("/ProfileScreen")}
            className = "User_Avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />;
        </div>
    </div>
  );
}

export default Nav;
