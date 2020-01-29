import Firebase from '../Config/FireConfig'

export const deletePost= (postid, fileRef) =>{
    return async function(dispatch){
        const post= await Firebase.deletePost(postid, fileRef);
        dispatch({type:'DELETE_POST', payload: post});
    }
}