import { combineReducers } from "redux";

//import los reducer de otros archivos
import CreateUser from './signIn'

const reducers= combineReducers({
    singIn: CreateUser


});

export default reducers