import React from 'react';
import Routes from './routes';
import Nav from './Components/nav';

import store from './store/store';
import {Provider} from 'react-redux'

function App() {
  
    return (
      <Provider store={store}>
      <div className='App'>
        <Nav/>
        <Routes/>
      </div>
      </Provider>
    )
  
}

export default App;
