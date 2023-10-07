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


const App=()=>{
  return(
    <>
    <ToastContainer />     
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/search/location/:location' element={<Home/>} />
    <Route path='/search/:keyword' element={<Home/>} />
    <Route path='/Login' element={<Login />} />
    <Route path='/user/UserDashboard' element={<UserRoutes><UserDashboard /></UserRoutes>} />
   <Route path='*' element={<NotFound />}/>
   </Routes>
   </BrowserRouter>
    </ThemeProvider>
    </>
  )
}
export default App;