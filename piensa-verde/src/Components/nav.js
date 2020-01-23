import React, {useState, useEffect} from 'react';
import {Link , withRouter} from 'react-router-dom';

const Nav =(props) =>{
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

export default withRouter(Nav);