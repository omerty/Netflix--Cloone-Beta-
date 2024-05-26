import React, {useState, useEffect} from 'react'
import "./LoginScreen.css";
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

    const[SignIn, setSignIn] = useState(false);

  return (
    <div className = "LoginScreen">
        <div className = "LoginScreen_Background">
            <img className ="LoginScreen_Logo" src = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt =""></img>
            
            <button onClick={() => setSignIn(true)} 
            className="Sign_In">Sign In</button>
            <div className = "LoginScreen_Gradient"></div>

            <div className = "LoginScreen_Body">
                {SignIn ? (<SignUpScreen />) : (<>
                    <h1>
                        Unlimited Films, TV Programmes and More.
                    </h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to Watch? Enter your email to create or restard your membership.</h3>

                    <div className="LoginScreen_Input">
                        <form>
                            <input type='email' placeholder='Email Address' />
                            <button onClick={() => setSignIn(true)} 
                            className="Started_Button"> Get Started </button>
                        </form>
                    </div>
                </>)}
            </div>
        </div>

        
    </div>
  )
}

export default LoginScreen