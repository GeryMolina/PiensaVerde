import React, {useState, useEffect} from 'react';
import {Link , withRouter} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'

//import { logoutUser} from '../actions/logout'
//import Firebase from '../Config/FireConfig'

const nav =(props) =>{
   return( 
    <nav>
        <ul>
            <li><Link to="/">ReactReduxFirebaseAuth</Link></li>
        </ul>
        <ul>
            <li><Link to="/create">Nuevo Post</Link></li>
        </ul>


    </nav>
   )
}

export default withRouter(nav);