import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import UserRegister from "../pages/SignUp/UserRegister";


const AppRouter =()=>(
    <BrowserRouter>
    <div className="container">
        <Header />
       <Routes>
        <Route component={UserRegister} path="/UserRegister" exact={true} />
       </Routes>
    </div>
    </BrowserRouter>
);
export default AppRouter;