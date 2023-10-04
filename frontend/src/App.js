import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import {ToastContainner} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App=()=>{
  return(
    <>
    <ToastContainner />
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/search/location/:location' element={<Home/>} />
    <Route path='/search/:keyword' element={<Home/>} />
   <Route path='#' element={<NotFound />}/>
   </Routes>
   </BrowserRouter>
    </ThemeProvider>
    </>
  )
}
export default App;