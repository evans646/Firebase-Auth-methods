import {useState,useEffect} from "react";
import { useNavigate,Link} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";


export const CreateAccountPage= () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    if (showErrorMessage) {
      setTimeout(() => {
        setShowErrorMessage(false);
      },3000);
    }
  }, [showErrorMessage]);

  const OnCreateAccountClick = async()=>{
    try{
        if (password !==confirmPassword){
            setErrorMessage('Password and confirm password do not match!')
            return;
        }
        await createUserWithEmailAndPassword(getAuth(),email,password);
        navigate('/')
    }catch(e){
        setErrorMessage(e.message);
        setShowErrorMessage(true);
    }
};
  return (
     <section className="create-accountpage-wrapper">         
    <div>
      {showErrorMessage && <div className="fail">{errorMessage}</div>}
   </div>
    <legend>Create Account Here</legend>    
      <fieldset>
        <div className="questWrap">
          <label Htmlfor="email">Your email</label>
          <input type="email" id="email" placeholder="example@mail.com" value={email} onChange={e=>setEmail(e.target.value)} required />  
        </div>
        <div className="questWrap">
          <label Htmlfor="password">Your password</label>
          <input type="password" id="password"  placeholder="*****" value={password} onChange={e=>setPassword(e.target.value)} required />
          <label Htmlfor="confirm-password">Confirm password</label>
          <input type="password" id="confirm-password" placeholder="Confirm password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} required />
        </div>
        <button className="btn-hover color" onClick={OnCreateAccountClick}disabled={confirmPassword !==password && !password &&confirmPassword}>Create Account</button>
         <hr/>
         <p>
            Have an account ? Log  In <Link to="/login">here</Link>
          </p>
      </fieldset>
     </section>
  );
};
