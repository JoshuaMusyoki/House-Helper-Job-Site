import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useFormik } from "formik";
import { registerAjobAction } from "../redux/actions/jobActions";
import { useDispatch } from "react-redux";

const JobPostForm =()=>{
    const [jobTitle, setJobTitle] = useState("")
    const [jobDescription, setJobDescription] = useState("")
    const [jobLocation, setJobLocation] = useState("")
    const [jobSalary, setJobSalary] = useState(null)
    const [jobType, setJobType] = useState(null)
    const dispatch = useDispatch();

    const postJob = (e) => {
        const data = { title: jobTitle, description: jobDescription, location: jobLocation,
                        salary: jobSalary, jtype:jobType }
        // axios.post('/api/job/create', data)
        dispatch(registerAjobAction(data));
        e.resetForm()
        .then(response => {
          console.log(response)
        })
    }

    // const formik=useFormik({
    //     initialValues:{
    //         title:'',
    //         description:'',
    //         location:'',
    //         salary:'',
    //         jobType:''
    //     },
    //     onSubmit: (values, actions) => {
    //         // alert(JSON.stringify(values, null, 2));
    //       dispatch(registerAjobAction(values));
    //       actions.resetForm();
    //     }
   // })
    return(
        
        <>
        <div className="submitJobContainer">
            <h3>Submit Job</h3>
            <Box onSubmit={postJob} component="form" className='form_style border-style' >
                    <Box sx={{ md:3, display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <form method='POST' action="submit-job" className="formContainer" onSubmit={postJob}>
                <TextField sx={{md:3, padding:1}}
                fullWidth
                 type="text" name="title" placeholder="Job Title" 
                  onChange={e => setJobTitle(e.target.value)} />
                <TextField sx={{md:3, padding:1}}
                fullWidth
                 type="text" name="description" placeholder="Job Description"
                    onChange={e => setJobDescription(e.target.value)} />
                <TextField sx={{md:3, padding:1}}
                fullWidth
                 type="text" name="location" placeholder="Job Location"
                    onChange={e => setJobLocation(e.target.value)} />
                <TextField sx={{md:3, padding:1}}
                fullWidth 
                type="number" name="salary" placeholder="Job Salary"
                    onChange={e => setJobSalary(e.target.value)} />

                    <TextField sx={{md:3, padding:1}}
                     fullWidth 
                     type="text" name="jtype" placeholder="Job Type e.g House Help, Electrician etc"
                    onChange={e => setJobType(e.target.value)} />
                <Button className="submitButton" type="submit">Submit</Button>
            </form>
            </Box>
            </Box>
        </div>
        </>
    )
}
export default JobPostForm