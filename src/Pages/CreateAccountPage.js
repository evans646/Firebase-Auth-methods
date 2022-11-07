import {useState} from 'react';
import { useNavigate } from "react-router-dom";

import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';


export const CreateAccountPage= () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const OnSignupClick = async()=>{
    try{
        await signInWithEmailAndPassword(getAuth(),email,password);
        navigate('/')
    }catch(e){
        setError(e.message)
    }
};
  return (
     <section className="create-accountpage-wrapper">         
    <form action="#" method="post">
    <legend>Sign Up</legend>
      <fieldset>
        <div class="questWrap">
          <label for="username">Your username</label>
          <input type="email" id="username" required />
          <i class="fas fa-info-circle tooltip"></i>
          <div role="tooltip" id="username-tip" class="helperText">* Your username is your email address.
          <i class="fas fa-times-circle closeBtn"></i>
          </div>
          
        </div>
        <div class="questWrap">
          <label for="password">Your password</label>
          <input type="password" id="password" required />
          <label for="confirm-password">Confirm password</label>
          <input type="password" id="confirm-password" required />
        </div>
        <label>
            <input type="checkbox"/>
            <span class="checkbox-value" aria-hidden="true"></span>
             Set phasers to stun
        </label>
        <input type="submit" id="signIn" value="Create Account"/>
      </fieldset>
    </form>

     </section>
  );
};
