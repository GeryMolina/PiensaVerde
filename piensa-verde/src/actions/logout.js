import Firebase from '../Config/FireConfig'

export const logoutUser = () =>{
    return async function (dispacth){
        await Firebase.logOut();
        dispacth({type:'LOGIN_USER', payload:{} });
        dispacth({type:'CREATE_USER', payload:{} })
    }

}