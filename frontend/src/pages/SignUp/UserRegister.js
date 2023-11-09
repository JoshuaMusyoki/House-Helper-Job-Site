import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import SHeader from '../../components/SignUpComponents/SHeader';
import Footer from '../../components/Footer';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { userSignUpAction } from '../../redux/actions/userActions';
import { CountryDropdown, RegionDropdown,CountryRegionData } from 'react-country-region-selector';
import { Box, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const UserRegister = () => {
    const [showPassword, setShowPassword] = useState(false);
    // const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const {userSignUp} =useSelector(state => state.signUp);

    const register =(event, values, actions)=>{
      const data = {
         firstName:'',
        lastName:'',
        email: '',
        country: '', 
        region:'',
        password:''
      }
      event.preventDefault();
      dispatch(userSignUpAction(values))
      // event.resetForm(actions)
      // axios.post('/api/signup', {name, email, password})
      .then(result => {
          console.log(result);
          if(result.data === "Already registered"){
              alert("E-mail already registered! Please Login to proceed.");
              navigate('/login');
          }
          else{
              alert("Registered successfully! Please Login to proceed.")
              navigate('/Login');
          }
          
      })
      
      .catch(err => console.log(err));

    }

    const [values, setValues] = React.useState({
        showPassword: false, 
        password: '',
       
      });
      

    const [profileData, setProfileData]=useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
       

    })

    const handleInputChange = (e) => {
        const { name, value, type, checked, options } = e.target;
        if (type === 'checkbox') {
          const selectedOptions = [...options].filter((option) => option.selected).map((option) => option.value);
          setProfileData({ ...profileData, [name]: selectedOptions });
        } else if (type === 'checkbox' && name === 'openForEmployment') {
          setProfileData({ ...profileData, [name]: checked });
        } else {
          setProfileData({ ...profileData, [name]: value });
        }
        
      };
      const passwordsMatch = profileData.password === profileData.confirmPassword;    
   
   //Select country 
   const selectCountry = (val) => {
    setCountry(val);
  }

  const selectRegion = (val) => {
    setRegion(val);
  }

  // Email Input component
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    // Email validation using a regular expression
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsEmailValid(emailPattern.test(newEmail));
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



    return (
      
        <div>
          <Navbar />
          <Box sx={{height:"120vh", display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-white p-3 rounded" style={{width : '100%'}}>
                    <h2 className='mb-3 text-primary'>Register</h2>
                    <form method='POST' onSubmit={register} action='register'>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong >First Name</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter Your First Name"
                                className="form-control" 
                                id="firstName" 
                                label="First Name"
                                // onChange={(event) => setName(event.target.value)}
                                onChange={handleInputChange}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong >Last Name</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter Your Last Name"
                                className="form-control" 
                                id="lastName" 
                                label="Last Name"
                                // onChange={(event) => setName(event.target.value)}
                                onChange={handleInputChange}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="InputEmail1" className="form-label">
                                <strong>Email Address</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="InputEmail1" 
                                // onChange={(event) => setEmail(event.target.value)}
                                onChange={handleEmailChange}
                                required
                                />
                                {!isEmailValid && (
                                    <p style={{ color: 'red' }}>Please enter a valid email address.</p>
                                  )}
                            
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="InputPassword" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                placeholder="Enter Password"
                                className="form-control" 
                                id="password" 
                                // onChange={(event) => setPassword(event.target.value)}
                                onChange={handleChange('password')}
                                required
                                endAdornment={
                                    <InputAdornment>
                                      <IconButton
                                        size="small"
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                      >
                                        {values.showPassword ? (
                                          <VisibilityOff fontSize="small" />
                                        ) : (
                                          <Visibility fontSize="small" />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  }
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="InputPassword" className="form-label">
                                <strong>Confirm Password</strong>
                            </label>
                            <input 
                                type={showPassword ? 'text':'password'} 
                                placeholder="Confirm Password"
                                className="form-control" 
                                id="confirmpassword" 
                                // onChange={(event) => setPassword(event.target.value)}
                                onChange={handleInputChange}
                                required
                            />
                            {passwordsMatch ? null :(
                                <div className='text-danger'>Passwords do not Match!!</div>
                            )}

                 </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="country" className="form-label">
                                <strong>Country of Residence</strong>
                            </label>
                            <CountryDropdown
                            sx={{mb:4}}
                            value={country}
                            onChange={(val) => selectCountry(val)}
                            />
                
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor='region' className='form-label'>
                                <strong>Region Your are Residing Currently</strong>
                            </label>
                            <RegionDropdown
                            sx={{mb:3}}
                            country={country}
                            value={region}
                            onChange={(val)=>selectRegion(val)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>

                    <p className='container my-2'>Already have an account ?</p>
                    <Link to='/Login' className="btn btn-secondary">Login</Link>
                </div>
            </div>
            </Box>
          <Footer />
        </div>
       
    )
}

export default UserRegister