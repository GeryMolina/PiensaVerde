import { combineReducers } from "redux";

//import los reducer de otros archivos
import createUser from './signin';
import logInUser from './login';
import logOutUser from './logout';
import createPost from './create'
import getPosts from './getPosts';
import getPost from './getPost';
import updatePost from './updatePost'
import deletePost from './deletePost'

const reducers= combineReducers({
    signIn: createUser,
    logIn: logInUser,
    logOut: logOutUser,
    create: createPost,
    posts: getPosts,
    post: getPost,
    update: updatePost,
    delete: deletePost,



});

export default reducers;