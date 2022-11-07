import useUser from "../Hooks/useUser"

import { Dashboard} from "../interface/dashBoard";
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