import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_RESET, USER_SIGNIN_SUCCESS } from "../constants/userConstants"


export const userReducerSignIn=(state={}, action)=>{
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return {loading:true, userInfo:null, isAuthenticated:false}
            
        case USER_SIGNIN_SUCCESS:
            return{
                loading:true,
                userInfo:action.payload,
                isAuthenticated:true
            }

        case USER_SIGNIN_FAIL:
            return{loading:true, userInfo:null, isAuthenticated:false, error:action.payload}
        
        case USER_SIGNIN_RESET:
            return {}

        default:
            return state;
    }
}