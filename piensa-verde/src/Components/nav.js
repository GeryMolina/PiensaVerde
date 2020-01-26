import React, {useState, useEffect} from 'react';
import {Link , withRouter} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'

import { logoutUser} from '../actions/logout'
import Firebase from '../Config/FireConfig'

const nav =(props) =>{
    
    const loginSelector = useSelector((state) => state.logIn);
    const signinSelector = useSelector((state) => state.signIn);
    const {userState, setUserState}= useState(null);
    const dispatch = useDispatch();
    const logoutUserAction = () => dispatch(logoutUser());


    useEffect(() => {
        Firebase.getUserState().then(user => { 
            setUserState(user);
        })
    })

    const logout = async()=>{
        console.log('logout User');
        setUserState(null);
        await logoutUserAction()
        //props.history.replace('/');

    }
    
    let buttons;
    if ((loginSelector.user && loginSelector.user.hasOwnProperty('user'))|| 
    (signinSelector.user && signinSelector.user.hasOwnProperty('user')) ||
    userState != null){
        buttons= (
            <React.Fragment>
                <li><Link to='/signin'>Registrarse</Link></li>
                <li><Link to='/login'>Ingresar</Link></li>
            </React.Fragment>
        )
    } else{
        buttons= (
            <React.Fragment>
                <li><button className='logout' onClick={logout}>Cerrar sesión</button></li>
            </React.Fragment>
        )
    }


   return( 
    <nav>
        <ul>
            <li><Link to="/">ReactReduxFirebaseAuth</Link></li>
        </ul>
        <ul>
            <li><Link to="/create">Nuevo Post</Link></li>
            {buttons}
        </ul>


    </nav>
   )
}

export default withRouter(nav);