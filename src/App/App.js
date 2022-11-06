import {DashboardPage} from "../Pages/DashboardPage";
import useUser from "../Hooks/useUser";
//So i will require the use Userhook here to determin if a user is logged in or not 

import {LoginPage} from "../Pages/LoginPage";

function App() {
  const {user} = useUser();
  return (
    <div className="App">
  {
    user ? <DashboardPage/> : <LoginPage/>
  }
    </div>
  );
}

export default App;
