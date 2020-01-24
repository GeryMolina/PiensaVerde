import React from 'react';
import {Switch , Route} from 'react-router-dom';
//componentes
import Main from './Components/main';
import SignIn from './Components/signin';

const Routes = () =>(
  
   <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/signin' component={SignIn}/>

    </Switch>
    
)

export default Routes