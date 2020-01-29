import Firebase from '../Config/FireConfig'

export const logoutUser = () => {

    return async function(dispatch){
        await Firebase.logout();
        dispatch({type: 'LOGIN_USER', payload: {} });
        dispatch({type: 'CREATE_USER', payload: {} });
    } 
}