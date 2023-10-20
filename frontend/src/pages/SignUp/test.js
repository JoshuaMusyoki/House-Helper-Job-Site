import React , {useState} from 'react'
import axios from "axios";
import { Avatar, Box, Button, Card, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useForm} from 'react-hook-form';
import SHeader from '../../components/SignUpComponents/SHeader';
import { useNavigate } from 'react-router-dom';
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
import {CountryDropdown, RegionDropdown, CountryRegionData} from 'react-country-region-selector'
import { useFormik } from 'formik';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useDispatch } from 'react-redux';
import { userSignUpAction } from '../../redux/actions/userActions';
const UserRegister = () => {
    const {errors} =useForm();
    const dispatch =useDispatch();
    const [user,setUser] = useState({
        initialValues:{
            firstName:'',
           lastName:'',
            email:'',
            password: ''
        },        

        onSubmit:(values, actions)=>{
            dispatch(userSignUpAction(values));
            actions.resetForm();
        }
    })
    const handleChange = e =>{
    const {firstName, lastName, value} = e.target
    setUser({
    ...user,//spread operator 
    [firstName && lastName]:value
    })
    };

    //handle submit
    // const handleSubmit = async(e) =>{
    //     e.preventDefault();
    // };

    const formik = useFormik({
        initialValues:{

        }
    })
//register function 
   const register = ()=>{
   const {firstName, lastName, email,password} = user
//    const firstName=user?.first_name;
   if (firstName && lastName && email && password){
    axios.post("http://localhost:9000/signup",user )
    .then(res=>console.log(res))
   }
//    else{
//        alert("invalid input")
//    }
   };

   //Previous button
   const navigate=useNavigate();
   const goBack=()=>{
    navigate('/Login');
   }

   //Select country and region component
   
    const[country, setCountry]=useState('');
    const[region, setRegion]=useState('');

    const handleCountryChange = (val) => {
        setCountry(val);
    };

    const handleRegionChange = (val) => {
        setRegion(val);
    };
   
    return (
        <>  
        <Navbar />
        <SHeader />
        <Box sx={{height:"100vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
        
<div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
    
    <Card sx={{minWidth:1200, mb:3, mt:3}}>
    <Card sx={{minWidth:50, mb:3, mt:3}} >
            <Box sx={{height: "5vh", display: "flex", flexDirection: "column",
            alignItems: "center", width: "100%"}}>
            <Button onClick={goBack}> <ArrowBackIcon />Select you role</Button>
            </Box>
        </Card>
    <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",height:"100%", width: "100%" }}>
                    <Avatar sx={{ height:"6vh", m: 1, bgcolor: "primary.main", mb: 3 }}>
                        </Avatar>
                    <Box sx={{height:'8vh', display:'flex',alignItems:'center', justifyContent:'center'}}>
                        <h3>Sign Up</h3>
                    </Box>

                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="first_name"
                            name="first_name"
                            label="Enter Your First Name"
                            type="text"
                            autoComplete='off'

                            // ref={register({
                            //     required:"First Name is required.",

                            //     pattern:{
                            //         value:/^[a-zA-Z]+$/,
                            //         message:"First name should contain only characters"
                            //     }
                            // })}
                            // className={`${errors.first_name ? 'input-error' : ''}`}

                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Enter your First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        {errors.firstName &&(
                             <p className="errorMsg">{errors.firstName.message}</p>
                        )}

                         <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="last_name"
                            name="last_name"
                            label="Enter Your Last Name"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Enter your Last Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />

                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="email"
                            label="E-mail"
                            name='email'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="E-mail"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />

                        
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                          <CountryDropdown
                          value={country}
                          onChange={(val)=>handleCountryChange(val)} />
                          <RegionDropdown
                          country={country}     
                          value={region}   
                          onChange={(val)=>handleRegionChange(val)} />
                          


                        <Button href='/Login' fullWidth variant="contained" type='submit' >Sign Up</Button>
                   
              <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
        Already have an account ?
        <a href="/Login" target="_parent" class="text-sm text-blue-500 underline hover:text-blue-700">
            Sign in
        </a>
    </span>
    </Box>
                    </Box>
              </Card>
         </div>
         
         </Box>
         <Footer />
             </>
    )
}

export default UserRegister
