import React from 'react'
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Avatar, Box } from '@mui/material';
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';

const Login = () => {
  return (
    <>
    <Box sx={{height:'81vh', display:'flex', alignItems:'center', justifyContent: 'center'}}>
        <Box onSubmit={handleSubmit} component='form' className='form-style border-style'>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%'}}>
                <Avatar sx={{m:1, bgcolor:"primary.main",mb:3}}>
                    <LockClockOutlined />
                </Avatar>

                
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <Button fullWidth variant="contained" type="submit">Log In</Button>
        </Box>
        </Box>
        </Box>
    </>
  )
}

export default Login