import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {getPosts} from '../actions/getPosts'


const Main = () => {

    const getPostsSelector = useSelector((state) => state.posts)
    const dispatch = useDispatch();
    const getPostsAction = () => dispatch(getPosts());

   
    useEffect(() => {
      getPostsAction();
    },[])


    return(
        <React.Fragment>
            <header>
            <div>
                <h1>Bienvenido</h1>
                <p>Ingresa tus datos</p>
            </div>
            </header>

            <div className="posts">
                {getPostsSelector.posts.map(post => {
                    return(
                    <div className="post" key={post.id}>
                        <div style={{backgroundImage: "url(" + post.data.cover + ")" }} />
                        <Link to={"post/" + post.id}>
                            <p>{post.data.title}</p>
                        </Link>
                    </div> )
                })}
            </div>



        </React.Fragment>


    )


}

export default Main;
