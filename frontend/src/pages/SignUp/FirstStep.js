import React from "react";
import {useForm} from 'react-hook-form';
import SHeader from "../../components/SignUpComponents/SHeader"
import Navbar from "../../components/Navbar";
import { Box } from "@mui/material";
import { Button, Form } from "react-bootstrap";
const FirstStep=(props)=>{
    const {register, handleSubmit, errors}=useForm();

    const onSubmit=(data)=>{
        console.log(data);
    };
    return(
        <>
        <Navbar />
       <SHeader />
       <Box>
        <Form className="input-Form" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-6 offset-md-3">
                <Form.Group controlId="first_name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                    type="text"
                    name="first_name"
                    placeholder="Enter your First Name"
                    autoComplete="off"
                    
                    ref={register({
                        required:'First Name is required.',
                        pattern:{
                            value:/^[a-zA-Z]+$/,
                            message:'First name should contain only characters'
                            
                        },
                    })}
                    className={`${errors.first_name ?  'input-error': ''}`}
                   
                    />
                    {errors.first_name &&(
                        <p className="errorMsg">{errors.first_name.message}</p>
                    )}
                </Form.Group>

                <Form.Group controlId="last_name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                    type="text"
                    name="last_name"
                    placeholder="Enter your Last Name"
                    autoComplete="off"
                    ref={register({
                        required:'Last Name is required.',
                        pattern:{
                            value:/^[a-zA-Z]+$/,
                            message:'Last name should contain only characters'
                            
                        }
                    })}
                    className={`${errors.last_name ?  'input-error':''}`}
                    />
                    {errors.last_name &&(
                        <p className="errorMsg">{errors.last_name.message}</p>
                    )}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Next
                </Button>
            </div>
        </Form>
       </Box>
        </>
      
    );
};
export default FirstStep;