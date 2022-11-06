import { GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons";

import {PhoneLoginButton} from "../interface/CustomPhoneBtn";

export const LoginPage = () => {
  return (
    <div className="login-page-wrapper">
        <legend>Sign In</legend>
      <form action="#" method="post">
        <fieldset>
          <div class="questWrap">
            <label for="username">Please enter your email address</label>
            <input type="email" id="username" placeholder="Your email" required />
          </div>
          <div class="questWrap">
            <label for="password">Your password</label>
            <input type="text" id="password" required />

          </div>
          <input type="submit" id="signIn" value="Sign In With Email" />
          <hr/>
          <p>
            You can also continue with :
          </p>
          <span>
          <GoogleLoginButton onClick={() => alert("Hello")} style={{padding:'10px'}}/>
          <GithubLoginButton/>
          <PhoneLoginButton/>
          </span>
        </fieldset>
      </form>
    </div>
  );
};
