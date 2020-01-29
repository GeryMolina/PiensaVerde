import React from 'react';
import {Switch , Route} from 'react-router-dom';
//componentes
import Main from './Components/main';
import SignIn from './Components/signin';
import Login from './Components/login';
import Create from './Components/create'

const Routes = () =>(
  
   <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/create' component={Create}/>

    </Switch>
    
)

export default Routes