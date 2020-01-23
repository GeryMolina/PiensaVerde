import React from 'react';
import {Switch , Route} from 'react-router-dom';
//componentes
import Main from './Components/main';

const Routes = () =>{
   return(
   <Switch>
        <Route exact path='/' component={Main}/>
    </Switch>
    )
}

export default Routes