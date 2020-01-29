import Firebase from '../Config/FireConfig'

export const createUser = (email, password) => {
    return async function(dispatch) {
        const user = await Firebase.signin(email, password);
        console.log(user);
        dispatch({type:'CREATE_USER', payload:user});
    }
}