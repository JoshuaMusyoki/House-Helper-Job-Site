import axios from 'axios'
import {toast} from 'react-toastify'
import { USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from '../constants/userConstants';



export const userSignInAction=(user)=>async(dispatch)=>{
    dispatch({type:USER_SIGNIN_REQUEST})
    try {
        const {data} = await axios.post("/api/signin", user)
        localStorage.setItem('userInfo', JSON.stringify(data));
        dispatch({
            type:USER_SIGNIN_SUCCESS,
            payload:data
        });
        toast.success("Login Successful");
    } catch (error) {
        dispatch({
            type:USER_SIGNIN_FAIL,
            payload:error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}
export const userLogoutAction=(user)=>async(dispatch)=>{
    dispatch({type:USER_LOGOUT_REQUEST})
    try {
        const {data} = await axios.get("/api/logout")
        localStorage.removeItem('userInfo');
        dispatch({
            type:USER_LOGOUT_SUCCESS,
            payload:data
        });
        toast.success("Log out Successful");
    } catch (error) {
        dispatch({
            type:USER_LOGOUT_FAIL,
            payload:error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}