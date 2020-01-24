import Firebase from '../Config/FireConfig'

export const loginUser = (email, password) => {
    return async function(dispatch){
        const user = await Firebase.login(email, password)
        .catch(error => console.log(console.error));

        if (user){
            dispatch({type:'LOGIN_USER', payload: user})
        }
        return user
    }
}