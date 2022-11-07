import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { DashboardPage } from "../Pages/DashboardPage";

import {PrivateRoute} from "../Hooks/PrivateRoutes";

import { LoginPage } from "../Pages/LoginPage";
import {CreateAccountPage} from "../Pages/CreateAccountPage";

function App() {
 


  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<DashboardPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/create-account" element={<CreateAccountPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
