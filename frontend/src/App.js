import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import Login from './pages/Login';
import UserDashboard from './pages/user/UserDashboard';
import UserRoutes from './components/UserRoutes';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Layout from './pages/global/Layout';
import UserJobsHistory from './pages/user/UserJobsHistory';
import UserInfoDashboard from './pages/user/UserInfoDashboard';
import EmployerDashboard from './pages/Employer/EmployerDashboard';
import EmployerRoutes from './components/EmployerRoutes';
import SingleJob from './pages/SingleJob';
import DashUsers from './pages/Employer/DashUsers';
import DashJobs from './pages/Employer/DashJobs';
import UserRegister from './pages/SignUp/UserRegister';
import adminSignUp from './pages/SignUp/adminSignUp';
import UserProfile from './pages/Profile/UserProfile';
import AboutUs from './pages/About/about';
import FileUploadComponent from './pages/Profile/FileUploadComponent';
import Jobs from './pages/Jobs';
import JobPostForm from './pages/JobPosting';
// import ViewJobs from './pages/ViewJobs';
import JobView from './pages/JobView';
import DashCategory from './pages/Employer/DashCategory';
import DashCreateCategory from './pages/Employer/DashCreateCategory';
import DashCreateJob from './pages/Employer/DashCreateJob';
import { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import MessagePopup from './lib/MessagePopup';
import {  styled } from '@mui/styles';


const UserDashboardHOC=Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoDashboardHOC=Layout(UserInfoDashboard);
const EmployerDashboardHOC=Layout(EmployerDashboard);
const DashUsersHOC=Layout(DashUsers);
const DashJobsHOC=Layout(DashJobs);
const JobPostFormHOC= Layout(JobPostForm);
const JobViewHOC= JobView;
const DashCategoryHOC=Layout(DashCategory);
const DashCreateCategoryHOC=Layout(DashCreateCategory);
const DashCreateJobHOC=Layout(DashCreateJob);


// const styles = styled('div')({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   minHeight: "98vh",
//   paddingTop: "64px",
//   boxSizing: "border-box",
//   width: "100%",
// });
// const useStyles = styled('div')(styles);

export const SetPopupContext = createContext();

const App=()=>{
  // const classes =useStyles;
  
  const [popup, setPopup] = useState({
    open:false,
    severity:"",
    message:"",
  });

  return(
    <>
    <ToastContainer />     
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ProSidebarProvider>
      <BrowserRouter>
      <SetPopupContext.Provider value={setPopup}>
        <Grid container direction="column">
          <Grid item xs>
            <Navbar />
          </Grid>
        <Grid item >
   <Routes>
    {/* <Route path='/' element={<Home/>} /> */}
    <Route path='/' element={<HomePage />} />
    <Route path='/AboutUs' element={<AboutUs/>} />
    <Route path='/search/location/:location' element={<Home/>} />
    <Route path='/search/:keyword' element={<Home/>} />
    <Route path='/UserRegister' element={<UserRegister />} /> 
    <Route path='/adminSignUp' element={<adminSignUp />} /> 
    <Route path='/Login' element={<Login />} />
    <Route path='/FileUploadComponent' element={<FileUploadComponent />} />
    <Route path='/helper/CreateProfile' element={<UserProfile />} />
    <Route path='/job/:id' element={<SingleJob />} />
    <Route path='/employer/dashboard' element={<EmployerRoutes><EmployerDashboardHOC /></EmployerRoutes>} />
    <Route path='/employer/users' element={<EmployerRoutes><DashUsersHOC /></EmployerRoutes>} />
    <Route path='/employer/jobs' element={<EmployerRoutes><DashJobsHOC /></EmployerRoutes>} />
    <Route path='/employer/category' element={<EmployerRoutes><DashCategoryHOC /></EmployerRoutes>} />
    <Route path='/employer/category/create' element={<EmployerRoutes><DashCreateCategoryHOC /></EmployerRoutes>} />
    <Route path='/employer/create' element={<EmployerRoutes><DashCreateJobHOC/></EmployerRoutes>} />
    <Route path='/helper/dashboard' element={<UserRoutes><UserDashboardHOC /></UserRoutes>} />
    <Route path='/helper/jobs' element={<UserRoutes><UserJobsHistoryHOC /></UserRoutes>} />
    <Route path='/helper/info' element={<UserRoutes><UserInfoDashboardHOC /></UserRoutes>} />
   <Route path='*' element={<NotFound />}/> 
   <Route path='/Jobs' element={<Jobs />} />
   <Route path='/JobPosting' element={<EmployerRoutes><JobPostFormHOC /></EmployerRoutes>} />
   <Route path='/ViewJobs' element={<UserRoutes><JobViewHOC /></UserRoutes>} />
   </Routes>
   </Grid>
   </Grid>
   <MessagePopup
   setOpen={(status)=>
    setPopup({
      ...popup,
      open:status,
    })
  }
  severity={popup.severity}
  message={popup.message}
   />
   </SetPopupContext.Provider>
   </BrowserRouter>
      </ProSidebarProvider>
    
    </ThemeProvider>
    </>
  );
}
export default App;