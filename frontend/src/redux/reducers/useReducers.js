import { USER_LOGOUT_FAIL,
     USER_LOGOUT_REQUEST, 
     USER_LOGOUT_RESET, 
     USER_LOGOUT_SUCCESS, 
     USER_SIGNIN_FAIL, 
     USER_SIGNIN_REQUEST, 
     USER_SIGNIN_RESET, 
     USER_SIGNIN_SUCCESS } from "../constants/userConstants"


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

//log out reducer
export const userReducerLogout=(state={}, action)=>{
    switch (action.type) {
        case USER_LOGOUT_REQUEST:
            return {loading:true}
            
        case USER_LOGOUT_SUCCESS:
            return{
                loading:true,
                user:action.payload,
            }

        case USER_LOGOUT_FAIL:
            return{loading:false, error:action.payload}
        
        case USER_LOGOUT_RESET:
            return {}

        default:
            return state;
    }
}
