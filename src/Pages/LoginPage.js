import {useState,useEffect} from 'react';
import { useNavigate,Link } from "react-router-dom";

import { GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons";
import {PhoneLoginButton} from "../interface/CustomPhoneBtn";

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithRedirect ,
  GoogleAuthProvider ,
  GithubAuthProvider,
  signInWithPopup,
  signInWithPhoneNumber,
} from 'firebase/auth';


const provider = new GoogleAuthProvider();
const Githubprovider = new GithubAuthProvider();

const scopes = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
];
provider.addScope(scopes);



export const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneInput,setPhoneNumber] = useState(null)
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [user,setUser] = useState(null);
  //custom hook to diplay error message temporaly
  useEffect(() => {
    if (showErrorMessage) {
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    }
  }, [showErrorMessage]);

  const OnlogInClick = async()=>{
    try{
        await signInWithEmailAndPassword(getAuth(),email,password);
        navigate('/')
    }catch(e){
      setErrorMessage(e.message);
      setShowErrorMessage(true);
    }
};

const OnGoogleLogInClick = async()=>{
  try{
    await signInWithRedirect(getAuth(),provider);
    navigate('/')
}catch(e){
  setErrorMessage(e.message);
  setShowErrorMessage(true);
}};
const OnGithubLogInClick = async()=>{
await  signInWithPopup(getAuth(), Githubprovider)
.then((result) => {
  const credential = GithubAuthProvider.credentialFromResult(result);
  if (credential) {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const token = credential.accessToken;
    setUser(token)
  }
  // The signed-in user info.
  setUser(result.user)
}).catch((error) => {
  // Handle Errors here.
  setErrorMessage(error.message);
  setShowErrorMessage(true);
});
};

// const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;


const OnPhoneLogInClick = async()=>{
  signInWithPhoneNumber(getAuth(),appVerifier)
  .then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    window.confirmationResult = confirmationResult;
  }).catch((error) => {
    // Error; SMS not sent
    setErrorMessage(error.message);
    setShowErrorMessage(true);
  });
};

  return (
    <div className="login-page-wrapper">
        <div>
      {showErrorMessage && <div className="fail">{errorMessage}</div>}
       </div>
        <legend>Log In Here</legend>
      <span>
        <fieldset>
          <div className="questWrap">
            <label htmlFor="username">Please enter your email address</label>
            <input type="email" id="username" placeholder="Your email"  value={email} onChange={e=>setEmail(e.target.value)} required />
          </div>
          <div className="questWrap">
            <label htmlFor="password">Your password</label>
            <input  type="password" id="password"  placeholder="*****" required   value={password} onChange={e=>setPassword(e.target.value)}/>
          </div>
          <button class="btn-hover color"  onClick={OnlogInClick} disabled={!password&&email}>Log In With Email</button>
          <hr/>
          <p className="social-continue">
            You can also
          </p>
          <span className="auth-btns">
          <GoogleLoginButton onClick={OnGoogleLogInClick}/>
          <GithubLoginButton  onClick={OnGithubLogInClick}/>
          <PhoneLoginButton onClick={OnPhoneLogInClick}/>
          </span>
          <p>
            Dont have an account ? Sign up <Link to="/create-account">here</Link>
          </p>
        </fieldset>
      </span>
    </div>
  );
};
