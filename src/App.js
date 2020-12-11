import React from 'react'

import {Home, Browse, Signin, Signup} from './pages'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes';
import {IsUserRedirect, ProtectedRoute} from './helpers/routes'
import {useAuthListener} from './hooks'

export default function App() {
  //const user=null;

   const {user} = useAuthListener();
   console.log(user);

  return (
    <Router>
      <Switch>
  
    <IsUserRedirect  
      user={user} 
      loggedInPath={ROUTES.BROWSE} 
      path={ROUTES.SIGN_IN}>
        <Signin/>
    </IsUserRedirect>
   
      <IsUserRedirect  
      user={user} 
      loggedInPath={ROUTES.BROWSE} 
      path={ROUTES.SIGN_UP}>
        <Signup/>
    </IsUserRedirect>  
    

    <ProtectedRoute 
    user={user} 
    path={ROUTES.BROWSE} >
      <Browse/>
    </ProtectedRoute>

    <IsUserRedirect exact 
    path={ROUTES.HOME} 
    user={user} 
    loggedInPath={ROUTES.BROWSE} 
    path={ROUTES.HOME}>
        <Home/>
    </IsUserRedirect>
    </Switch>
    </Router>
    
  );
}


