import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { jobTypeLoadAction } from '../../redux/actions/jobTypeActions';
import * as yup from 'yup';
import {useFormik} from 'formik';
import { registerAjobAction } from '../../redux/actions/jobActions';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';

const validationSchema = yup.object({
    title: yup
        .string('Enter a job title')
        .required('title is required'),
    description: yup
        .string('Enter a description')
        .min(6, 'Description should be of minimum 6 characters length')
        .required('Description is required'),
    salary: yup
        .number('Enter a salary')
        .required('Salary is required'),
    location: yup
        .string('Enter a location')
        .required('Location is required'),
    jobType: yup
        .string('Enter a Category')
        .required('Category is required'),
})
const DashCreateJob = () => {
    const dispatch = useDispatch();

    // Job Type
    useEffect(()=>{
        dispatch(jobTypeLoadAction())
    },[]);

    const {jobType} = useSelector(state => state.jobTypeAll);
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            location: '',
            salary: '',
            jobType: ''
        },
   
    validationSchema : validationSchema,
    onsubmit: (values, actions)=>{
        dispatch(registerAjobAction());
        actions.resetForm();
    },
})
   
  return (
    <>
    <Box sx={{height:'100%', display:'flex', alignItems:'cent', justifyContent:'center', pt:4}}>
        <Box onsubmit={formik.handleSubmit} component="form" className='form_style border-style'>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
            <Typography variant='h5' component='h2' sx={{pb:3}}>
                Register a Job
            </Typography>
            <TextField
            fullWidth
            id='title'
            label='Title'
            name='title'
            InputLabelProps={{
                shrink:true,
            }}
            placeholder='Title'
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            />

            <TextField
            fullWidth
            id='description'
            label='Description'
            name='description'
            type='text'
            InputLabelProps={{
                shrink:true
            }}
            placeholder='Description'
            value={formik.values.description}
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
            />
             <TextField
            fullWidth
            id='location'
            label='Location'
            name='location'
            type='text'
            InputLabelProps={{
                shrink:true
            }}
            placeholder='Location'
            value={formik.values.location}
            onBlur={formik.handleBlur}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
            />
            <TextField
            fullWidth
            id='salary'
            label='Salary'
            name='salary'
            type='text'
            InputLabelProps={{
                shrink:true
            }}
            placeholder='Salary'
            value={formik.values.salary}
            onBlur={formik.handleBlur}
            error={formik.touched.salary && Boolean(formik.errors.salary)}
            helperText={formik.touched.salary && formik.errors.salary}
            />
            <TextField
            fullWidth
            className='px-2 my-2'
            variant='outlined'
            id='jobType'
            select
            label='Category'
            name='jobType'
            value={formik.values.jobType}
            error={formik.touched.jobType && Boolean(formik.errors.jobType)}
            helperText={formik.touched.jobType && formik.errors.jobType}
            >
                <MenuItem key={""} value={""}>

                </MenuItem>
                {jobType && jobType.map((cat)=>(
                    <MenuItem key={cat._id} value={cat._id}>
                        {cat.jobTypeName}
                    </MenuItem>
                ))}
            </TextField>
            <Button fullWidth variant='contained' type='submit'>Create Job</Button>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default DashCreateJob