import React from 'react'

import {Home, Browse, Signin, Signup} from './pages'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
      
    <Route exact path={ROUTES.BROWSE}>
        <Browse/>
    </Route>
    <Route exact path={ROUTES.SIGN_IN}>
        <Signin/>
    </Route>
    <Route exact path={ROUTES.SIGN_UP}>
        <Signup/>
    </Route>
    <Route exact path={ROUTES.HOME}>
        <Home/>
    </Route>

    </Router>
    
  );
}


