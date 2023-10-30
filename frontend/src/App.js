import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
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
import ViewJobs from './pages/ViewJobs';


const UserDashboardHOC=Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoDashboardHOC=Layout(UserInfoDashboard);
const EmployerDashboardHOC=Layout(EmployerDashboard);
const DashUsersHOC=Layout(DashUsers);
const DashJobsHOC=Layout(DashJobs);
const JobPostFormHOC= Layout(JobPostForm);
const ViewJobsHOC= ViewJobs;

const App=()=>{
  

  return(
    <>
    <ToastContainer />     
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ProSidebarProvider>
      <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
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
    <Route path='/helper/dashboard' element={<UserRoutes><UserDashboardHOC /></UserRoutes>} />
    <Route path='/helper/jobs' element={<UserRoutes><UserJobsHistoryHOC /></UserRoutes>} />
    <Route path='/helper/info' element={<UserRoutes><UserInfoDashboardHOC /></UserRoutes>} />
   <Route path='*' element={<NotFound />}/> 
   <Route path='/Jobs' element={<Jobs />} />
   <Route path='/JobPosting' element={<EmployerRoutes><JobPostFormHOC /></EmployerRoutes>} />
   <Route path='/ViewJobs' element={<UserRoutes><ViewJobsHOC /></UserRoutes>} />
   </Routes>
   </BrowserRouter>
      </ProSidebarProvider>
    
    </ThemeProvider>
    </>
  )
}
export default App;