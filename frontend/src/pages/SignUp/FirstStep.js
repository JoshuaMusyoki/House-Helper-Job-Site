import React from "react";
import {useForm} from 'react-hook-form';
import SHeader from "../../components/SignUpComponents/SHeader"
import Navbar from "../../components/Navbar";
import { Box } from "@mui/material";
import { Form } from "react-bootstrap";
const FirstStep=(props)=>{
    const {register, handleSubmit, errors}=useForm();

    const onSubmit=(data)=>{
        console.log(data);
    }
    return(
        <>
        <Navbar />
       <SHeader />
       <Box>
        <Form className="input-Form" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-6 offset-md-3">
                <Form.Group controlId="first_name">
                    <Form.Label>First Name</Form.Label>
                </Form.Group>
            </div>
        </Form>
       </Box>
        </>
      
    )
}
export default FirstStep;