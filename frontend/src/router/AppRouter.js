import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import FirstStep from "../pages/SignUp/FirstStep";


const AppRouter =()=>(
    <BrowserRouter>
    <div className="container">
        <Header />
       <Routes>
        <Route component={FirstStep} path="/SignUp" exact={true} />
       </Routes>
    </div>
    </BrowserRouter>
);
export default AppRouter;