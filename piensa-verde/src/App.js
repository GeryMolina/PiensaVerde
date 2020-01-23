import React from 'react';
import Routes from './routes';
//import Nav from './Components/Nav';

import Store from './store/store';
import {Provider} from 'react-redux'

function App() {
  
    return (
      <Provider store={Store}>
      <div className='App'>
        <header className='App-header'>

        </header>
        
      </div>
      </Provider>
    )
  
}

export default App;
