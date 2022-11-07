import { getAuth, signOut } from "firebase/auth";


export const Dashboard = () => {
    const auth = getAuth();
    const user = auth.currentUser;

  const handleSignOut = () => {
    signOut(getAuth()).then(
      function () {
        window.location.reload();
        console.log("Signed Out");
      },
      function (error) {
        console.error("Sign Out Error", error);
      }
    );
  };


// The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName||null;
    const email = user.email||null;
    const photoURL = user.photoURL||null;
    const emailVerified = user.emailVerified||false;
    const uid = user.uid||null;

   
  return (
    <>
      <h1>Dashboard</h1>
      <input type="submit" id="signIn" value="Sign out2"  onClick={handleSignOut}/>
       <p>
        {email}
        {displayName}
        {photoURL}
        {emailVerified}
        {uid}
       </p>
    </>
  );
};
