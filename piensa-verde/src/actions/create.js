import Firebase from "../Config/FireConfig";

export const createPost = (post) => {
 
    return async function(dispatch){
        const firestorePost = await Firebase.createPost(post);
        dispatch({type: "CREATE_POST", payload: firestorePost});
    }
 

}