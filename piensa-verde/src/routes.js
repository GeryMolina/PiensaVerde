import React from 'react';
import {Switch , Route} from 'react-router-dom';
//componentes
import Main from './Components/main';
import SignIn from './Components/signin';
import Login from './Components/login';
import Create from './Components/create';
import Post from './Components/post';

import Auth from './Components/auth/auth'

const Routes = () =>(
  
   <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/create' component={Auth(Create)}/>
        <Route exact path='/post/:id' component={Post}/>
        
    </Switch>
    
)

export default Routes