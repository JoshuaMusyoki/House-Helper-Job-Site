import React, { useRef } from 'react'
import {useState, useEffect} from 'react';
import {faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Login from '../../pages/Login';
import { Avatar, Box, Button, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SHeader from '../../components/SignUpComponents/SHeader';
// import './register.css';

const USER_REGEX=/^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX=/^(?=.*[0-9])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const UserRegister = () => {
    const userRef=useRef();
    const errRef=useRef();

    const [user, setUser]=useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] =useState('');
    const [validPwd, setValidPwd] =useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] =useState('');
    const [validMatch, setvalidMatch] =useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        userRef.current.focus();
    },[])

    useEffect(()=>{
      const result=USER_REGEX.test(user);
      console.log(result);
      console.log(user);
      setValidName(result);
    },[user])

    useEffect(()=>{
      const result=PWD_REGEX.test(pwd);
      console.log(result);
      console.log(pwd);
      setValidPwd(result);
      const match = pwd===matchPwd;
      setvalidMatch(match);
    },[pwd, matchPwd])

    useEffect(()=>{
      // errMsg=setErrMsg('');
      setErrMsg('');
    },[user, pwd, matchPwd])

    const handleSubmit=async (e) =>{
      e.preventDefault();
      const v1=USER_REGEX.test(user);
      const v2=PWD_REGEX.test(pwd);

      if(!v1 || !v2){
        setErrMsg('Invalid Entry');
        return;
      }
      console.log(user, pwd);
      setSuccess(true);
    }

     //Previous button
   const navigate=useNavigate();
   const goBack=()=>{
    navigate('/Login');
   }

   const styles = {
    input: {
      fontFamily: 'Nunito, sans-serif',
      fontSize: '22px',
      padding: '0.25rem',
      borderRadius: '0.5rem',
    },
    label: {
      marginTop: '1rem',
    },
    button: {
      fontFamily: 'Nunito, sans-serif',
      fontSize: '22px',
      padding: '0.25rem',
      borderRadius: '0.5rem',
    },
    textarea: {
      fontFamily: 'Nunito, sans-serif',
      fontSize: '22px',
      padding: '0.25rem',
      borderRadius: '0.5rem',
    },
    instructions: {
      fontSize: '0.75rem',
      borderRadius: '0.5rem',
      background: '#000',
      color: '#fff',
      padding: '0.25rem',
      position: 'relative',
      bottom: '-10px',
    },
    instructionsSvg: {
      marginRight: '0.25rem',
    },
    offscreen: {
      position: 'absolute',
      left: '-9999px',
    },
    hide: {
      display: 'none',
    },
    valid: {
      color: 'limegreen',
      marginLeft: '0.25rem',
    },
    invalid: {
      color: 'red',
      marginLeft: '0.25rem',
    },
    errmsg: {
      backgroundColor: 'lightpink',
      color: 'firebrick',
      fontWeight: 'bold',
      padding: '0.5rem',
      marginBottom: '0.5rem',
    },
    line: {
      display: 'inline-block',
    },
    form: {
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
      justifyContent:'center',
      alignItems:'center',
    },
    html: {
      fontFamily: 'Nunito, sans-serif',
      fontSize: '22px',
      color: '#fff',
    },
    body: {
      minHeight: '100vh',
      backgroundColor: 'dodgerblue',
    },
    App: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '1rem 0.5rem',
    },
    section: {
      width: '100%',
      maxWidth: '420px',
      minHeight: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '1rem',
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
    section: {
      width: '100%',
      maxWidth: '420px',
      minHeight: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '1rem',
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      flexGrow: 1,
      paddingBottom: '1rem',
    },
    link: {
      color: '#fff',
    },
  };

  
   
  return (
    <>

    <Navbar />
    <SHeader />
    {success ?(
      <section style={styles.section}>
      <h1>Success!</h1>
      <p>
      <a href='Login'>Sign In</a>
      </p>
      </section>
    ):(
   

         <Box sx={{height:"150vh", display:"flex", alignItems:"center", justifyContent:"center"}}>

        <div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            
            <Card sx={{minWidth:1500, mb:3, mt:3}}>
            <Card sx={{minWidth:50, mb:3, mt:3}} >
                    <Box sx={{height: "5vh", display: "flex", flexDirection: "column",
                    alignItems: "center", width: "100%"}}>
                    <Button onClick={goBack}> <ArrowBackIcon />Select you role</Button>
                    </Box>
                </Card>
                    
    <section >
      <p  ref={errRef} className={errMsg ? 'errMsg' : "offscreen"} aria-live="assertive">{errMsg}  </p>
      {/* <h1>Register</h1> */}
      <Box onSubmit={handleSubmit}  component="form" className='form_style border-style' style={styles.form}>
     
       
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",height:"100%", width: "100%" }}>

        <label htmlFor="firstName" style={styles.label}>
          First Name: 
          
          <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} style={styles} />
          <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
        </label>

        <input
        type='text'
        style={styles.input}
        id='firstname'
        ref={userRef}
        autoComplete='off'
        onChange={(e)=>setUser(e.target.value)}
        required
        aria-invalid={validName ? "false":"true"}
        aria-describedby='uidnote'
        onFocus={()=>setUserFocus(true)}
        onBlur={()=>setUserFocus(false)}
        />
        <p id='uidnote'  style={styles.instructions } className={userFocus && user && !validName ? "instructions":"offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle}/>
          4 to 24 characters.<br />
          Must begin with a letter.<br />
          Letters, numbers, underscores, hyphens allowed.
        </p>

        <label htmlFor='lastName'>
          Last Name: 
          <span className={validName ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validName || !user ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>

        <input
        type='text'
        id='lastName'
        style={styles.input}
        ref={userRef}
        autoComplete='off'
        onChange={(e)=>setUser(e.target.value)}
        required
        aria-invalid={validName ? "false":"true"}
        aria-describedby='uidnote'
        onFocus={()=>setUserFocus(true)}
        onBlur={()=>setUserFocus(false)}
        />
        <p id='uidnote' style={styles.instructions} className={userFocus && user && !validName ? "instructions":"offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} style={styles.instructionsSvg}/>
          4 to 24 characters.<br />
          Must begin with a letter.<br />
          Letters, numbers, underscores, hyphens allowed.
        </p>

        <label htmlFor='password' style={styles.label}>
          Password: 
          <span className={validPwd ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validPwd || !pwd ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>

        <input
        type='password'
        id='password'
        style={styles.input}
        autoComplete='off'
        onChange={(e)=>setPwd(e.target.value)}
        required
        aria-invalid={validPwd ? "false":"true"}
        aria-describedby='pwdnote'
        onFocus={()=>setPwdFocus(true)}
        onBlur={()=>setPwdFocus(false)}
        />
        <p id='pwdnote' style={styles.instructions} className={pwdFocus && !validPwd ? "instructions":"offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          8 to 24 characters.<br />
          Must include uppercase and lowercase letters, a number and a special character.<br />
         Special characters allowed: <span aria-label='exclamation-mark'>!</span> 
         <span aria-label='at symbol'>@</span> <span aria-label='hashtag'>#</span>
        <span aria-label='dollar sign'>$</span><span aria-label='percent'>%</span>
        </p>

        <label htmlFor='confirm_pwd' style={styles.label}>
          Confirm Password: 
          <span className={validMatch && matchPwd ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>

        <input
        type='password'
        id='confirm_pwd'
        style={styles.input}
        autoComplete='off'
        onChange={(e)=>setMatchPwd(e.target.value)}
        required
        aria-invalid={validMatch ? "false":"true"}
        aria-describedby='confirmnote'
        onFocus={()=>setMatchFocus(true)}
        onBlur={()=>setMatchFocus(false)}
        />
        <p id='confirmnote' style={styles.instructions} className={matchFocus && !validMatch ? "instructions":"offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
         Must match the first input password field
        </p>
        <button style={styles.button} disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
      
     
      <p style={styles.link}>
      Already Registered? <br/>
      <span className="line">
        <a href='/Login'>Sign In</a>
      </span>
      </p>
      </Box>
      </Box>
    </section>
   
    </Card>
    </div>
    </Box>
    )}
    <Footer />
    </>
  )
    
}

export default UserRegister