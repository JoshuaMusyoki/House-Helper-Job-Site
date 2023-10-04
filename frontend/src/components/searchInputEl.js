import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Box, Button, InputBase } from '@mui/material';

const validationSchema = yup.object({
  search: yup
    .string('Enter your search query')
    .required('This field can not be empty'),
});

const SearchInputEl = () => {
  const navigate= useNavigate();
    
  const onSubmit=(values, actions) =>{
    const {search}=values;
    if(search.trim()){
        navigate(`/search/${search}`);
    }else{
        navigate('/');
    }
    actions.resetForm();
  }
  const {values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting} = useFormik({
    initialValues:{
        search:'',
    },
    validationSchema: validationSchema,
    onSubmit
  });
  return (
      <form onSubmit={handleSubmit} style={{width: '50%'}}>
        <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>
            {/* search */}
            <InputBase sx={{bgcolor: 'white', padding:'10px'}}
            fullWidth={true}
            id="search"
            name="search"
            label="search"
            placeholder='ex. House Cleaner, House Helper'
            value={values.search}
            onChange={handleChange}
            error={touched.search && Boolean(errors.search)}
            //helperText={formik.touched.search && formik.errors.search}
            />
            <Button color="primary" variant="contained" type="submit" disabled={isSubmitting}>
                Search
            </Button>
        </Box>
        <Box component='span' sx={{color: "orange"}}>{touched.search && errors.search}</Box>
      </form>
  );
};
export default SearchInputEl;

