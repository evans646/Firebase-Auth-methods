import {useState} from 'react';
import { useNavigate,Link } from "react-router-dom";

import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';


import { GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons";
import {PhoneLoginButton} from "../interface/CustomPhoneBtn";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const OnlogInClick = async()=>{
    try{
        await signInWithEmailAndPassword(getAuth(),email,password);
        navigate('/')
    }catch(e){
        setError(e.message)
    }
};
  return (
    <div className="login-page-wrapper">
       {error &&<p className='error'>{error}</p>}
        <legend>Sign In</legend>
      <span>
        <fieldset>
          <div className="questWrap">
            <label htmlFor="username">Please enter your email address</label>
            <input type="email" id="username" placeholder="Your email"  value={email} onChange={e=>setEmail(e.target.value)} required />
          </div>
          <div className="questWrap">
            <label htmlFor="password">Your password</label>
            <input  type="password" id="password" required   value={password} onChange={e=>setPassword(e.target.value)}/>
          </div>
          <input type="submit" id="signIn" value="Sign In With Email" onClick={OnlogInClick}/>
          <hr/>
          <p className="social-continue">
            You can also continue with :
          </p>
          <span className="auth-btns">
          <GoogleLoginButton onClick={() => alert("Hello")} style={{padding:'10px'}}/>
          <GithubLoginButton/>
          <PhoneLoginButton/>
          </span>
          <p>
            Dont have an account ? Sign up <Link to="/create-account">here</Link>
          </p>
        </fieldset>
      </span>
    </div>
  );
};
