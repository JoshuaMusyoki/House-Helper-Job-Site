import {useRef, useState, useEffect, useRef} from 'react';
import {faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const USER_REGEX=/^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX=/^(?=.*[0-9])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

import React from 'react'

const UserRegister = () => {
    const useRef=useRef();
    const errRef=useRef();

    const [user, setUser]=useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] =useState('');
    const [validPwd, setValidPwd] =useState(false);
    const [pwdFocus, setPwdFocus] = useState(false)
  return (
    <div>UserRegister</div>
  )
}

export default UserRegister