import Firebase from '../Config/FireConfig'

export const getPost = (postid) =>{
    
    return async function(dispatch){
        const postData= await Firebase.getPost(postid);
        dispatch({type:'GET_POST', payload: postData});
    }
}