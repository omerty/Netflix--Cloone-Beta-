import React, {useRef} from 'react'
import "./SignUpScreen.css";
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"



function SignUpScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const Register = async (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
      ).then((auth) => {
        console.log(auth);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  //2:49:56
  const SignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword
    (
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((auth) => {
      console.log(auth);
    }).catch((error)=> alert(error.message))

  };

  return (
    <div className = "SignUpScreen">
      <form>
          <h1>Sign In</h1>
          <input ref = {emailRef} type='email' placeholder='Email'></input>
          <input ref = {passwordRef} placeholder="password" type="password"></input>
          <button type="submit" onClick={SignIn}>Sign In</button>
          <h4>
            <span className="SignUp_Grey">New to Netflix?</span>
            <span className="SignUp_Link" onClick={Register}>Sign Up Now</span></h4>
      </form>
    </div>
  )
}
export default SignUpScreen;