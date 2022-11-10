import useUser from "../Hooks/useUser";

import { Dashboard} from "../Interface/DashBoard";
import { LoginPage } from "../Pages/LoginPage";

export const DashboardPage =()=>{
  const {user} = useUser();
    return(
        <div>
        {
           user ? <Dashboard/> : <LoginPage/>
        }
        </div>
    )
};