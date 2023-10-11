import{createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { loadJobReducer, loadJobSingleReducer} from './reducers/jobReducer';
import { loadJobTypeReducer } from './reducers/jobTypeReducers';
import { allUserReducers, userApplyForJobReducer, userReducerLogout, userReducerProfile, userReducerSignIn } from './reducers/useReducers';
import { json } from 'react-router-dom';

//combine reducers
const reducers= combineReducers({
    loadJobs:loadJobReducer,
    jobTypeAll:loadJobTypeReducer,
    signIn: userReducerSignIn,
    logOut: userReducerLogout,
    userProfile:userReducerProfile,
    singleJob:loadJobSingleReducer,
    userJobApplication:userApplyForJobReducer,
    allUsers:allUserReducers
});

//initial state
let initialState={
    signIn:{
        userInfo:localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null
    }
};
const middleware=[thunk];
const store=createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store;