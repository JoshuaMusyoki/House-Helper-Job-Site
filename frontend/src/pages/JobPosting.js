import React, { useState } from "react";

const JobPostForm =()=>{
    const [jobTitle, setJobTitle] = useState("")
    const [jobDescription, setJobDescription] = useState("")
    const [jobLocation, setJobLocation] = useState("")
    const [jobSalary, setJobSalary] = useState(null)
    const [jobType, setJobType] = useState(null)

    const postJob = (e) => {
        const data = { title: jobTitle, description: jobDescription, location: jobLocation,
                        salary: jobSalary, jtype:jobType }
        axios.post('/api/job/create', data)
        .then(response => {
          console.log(response)
        })
    }
    return(
        
        <>
        <div className="submitJobContainer">
            <h3>Submit Job</h3>
            <form className="formContainer" onSubmit={postJob}>
                <input type="text" name="title" placeholder="Job Title" 
                  onChange={e => setJobTitle(e.target.value)} />
                <input type="text" name="description" placeholder="Job Description"
                    onChange={e => setJobDescription(e.target.value)} />
                <input type="text" name="location" placeholder="Job Location"
                    onChange={e => setJobLocation(e.target.value)} />
                <input type="number" name="salary" placeholder="Job Salary"
                    onChange={e => setJobSalary(e.target.value)} />

                    <input type="text" name="jtype" placeholder="Job Type e.g House Help, Electrician etc"
                    onChange={e => setJobType(e.target.value)} />
                <button className="submitButton" type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}
export default JobPostForm