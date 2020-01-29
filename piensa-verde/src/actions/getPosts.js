import Firebase from '../Config/FireConfig';

export const getPosts = () => {
 
    return async function(dispatch){

        const postsArray = await Firebase.getPosts();
        console.log(postsArray);
        dispatch({type: "GET_POSTS", payload: postsArray});
      
       
    }
 

}