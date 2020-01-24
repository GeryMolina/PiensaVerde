import { combineReducers } from "redux";

//import los reducer de otros archivos
import createUser from './signIn'
import loginUser from './Login'
import logoutUser from './Logout'

const reducers= combineReducers({
    singIn: createUser,
    logIn: loginUser,
    logOut: logoutUser,


});

export default reducers