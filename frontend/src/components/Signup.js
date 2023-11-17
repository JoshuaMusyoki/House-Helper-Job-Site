import { Button, Grid, TextField } from "@mui/material";
import { styled } from "@mui/styles";
import { useContext, useState } from "react";
import { SetPopupContext } from "../App";
import isAuth from "../lib/isAuth";


const useStyles= styled("div")({
    body:{
        padding:"60px 60px",
    },
    InputBox:{
        width:"400px",
    },
    submitButton:{
        width:"400px",
    },
});

const MultiFieldInput=(props)=>{
    const classes = useStyles();
    const {education, setEducation} = props;

    return(
        <>
        {education.map((obj, key)=>(
            <Grid
            item
            container
            className={classes.InputBox}
            key={key}
            style={{paddingLeft:0, paddingRight:0}}
            >
                <Grid item xs={6}>
                    <TextField 
                    label={`Institution Name #${key + 1}`}
                    value={education[key].institutionName}
                    onChange={(event) => {
                      const newEdu = [...education];
                      newEdu[key].institutionName = event.target.value;
                      setEducation(newEdu);
                    }}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                    label="End Year"
                    value={obj.endYear}
                    variant="outlined"
                    type="number"
                    onChange={(event) => {
                      const newEdu = [...education];
                      newEdu[key].endYear = event.target.value;
                      setEducation(newEdu);
                    }}
                    />
                </Grid>
            </Grid>
        ))}
        <Grid item>
            <Button 
             variant="contained"
             color="secondary"
             onClick={() =>
               setEducation([
                 ...education,
                 {
                   institutionName: "",
                   startYear: "",
                   endYear: "",
                 },
               ])
             }
             className={classes.InputBox}
             >
                Add Institution Details
             </Button>

        </Grid>
        </>
    );
};

const Login =(props) =>{
    const classes =useStyles();
    const setPopup = useContext(SetPopupContext);

    const [loggedin, setLoggedin] = useState(isAuth());
    const [signupDetails, setSignupDetails] = useState({
        type: "applicant",
        email: "",
        password: "",
        name: "",
        education: [],
        skills: [],
        resume: "",
        profile: "",
        bio: "",
        contactNumber: "",
    });
    const [phone, setPhone] = useState("");
    const [education, setEducation] =useState([
        {
            institutionName: "",
            startYear: "",
            endYear: "",
        },
    ]);
    const [inputErrorHandler, setInputErrorHandler] = useState({
        email: {
            untouched: true,
            required: true,
            error: false,
            message: "",
          },
          password: {
            untouched: true,
            required: true,
            error: false,
            message: "",
          },
          name: {
            untouched: true,
            required: true,
            error: false,
            message: "",
          },
    });
    const handleInput =(key, value) =>{
        setSignupDetails({
            ...signupDetails,
            [key]:value,

        });
    };
    const handleInputError = (key, status, message) =>{
        setInputErrorHandler({
            ...inputErrorHandler,
            [key]:{
                required: true,
                untouched: false,
                error: status,
                message: message,
            },
        });
    };
    const handleLogin = () =>{
        const tmtErrorHandler ={};
        Object.keys(inputErrorHandler).forEach((obj) =>{
            if(inputErrorHandler[obj].required && inputErrorHandler[obj].untouched){
                tmtErrorHandler ={
                    required: true,
                    untouched: false,
                    error: true,
                    message: `${obj[0].toUpperCase() + obj.substr(1)} is required`,
                }
            }{
                tmtErrorHandler[obj]=inputErrorHandler[obj];
            },
        });
        console.log(education);
    }
}