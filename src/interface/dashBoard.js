import {Link} from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";


import { Main} from "./Main";

export const Dashboard = () => {

  const handleSignOut = () => {
    signOut(getAuth()).then(
      function () {
        window.location.reload();
        window.alert("Signed Out Successfully")
        console.log("Signed Out");
      },
      function (error) {
        console.error("Sign Out Error", error);
      }
    );
  };
 
  return (
      <div className="main-content">
        <Link to="#" onClick={handleSignOut} title="signOut">
          <button value="Sign out" className="logout-btn" onClick={handleSignOut}>
            <span className="fas fa-user"></span> Log out
          </button>
        </Link>
       <Main/>
      </div>
  );
};
