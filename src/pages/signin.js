import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {FirebaseContext} from '../context/firebase'
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'
import {Form } from '../components'

import * as ROUTES from '../constants/routes';

export default function SignIn() {
    const history = useHistory();

    const {firebase} = useContext(FirebaseContext);
    
   const [emailAddress, setEmailAddress]= useState();
   const [password, setPassword]=useState();
   const [error, setError]=useState('');
   
   const isInvalid = password === '' || emailAddress === '';
   
   const handleSignIn = e => {
       e.preventDefault();
    // firebase authentication start from here
    firebase
    .auth()
    .signInWithEmailAndPassword(emailAddress, password)
    .then(()=>{
        // push to the browse page
      history.push(ROUTES.BROWSE);
    }).catch((error)=>{
        setEmailAddress('');
        setPassword('');
        setError(error.message);
    })

   }

    return (
        <>
       <HeaderContainer>

        <Form>

            <Form.Title>Sign In</Form.Title>
             {error && <Form.Error>{error}</Form.Error>}

            <Form.Base onSubmit = {handleSignIn} method="post">
             <Form.Input 
             type="text"
             placeholder = "Email Address"
             value={emailAddress}
             onChange={({target})=> setEmailAddress(target.value)}
             ></Form.Input>

             <Form.Input 
             placeholder = "Password"
             value={password}
             onChange={({target})=> setPassword(target.value)}
             type="password"
             autoComplete="off"
             ></Form.Input>

            <Form.Submit disabled={isInvalid} type="submit">
                Sign In
            </Form.Submit>
            </Form.Base>

        <Form.Text>
            New to Shuzuflix? <Form.Link to="/signup"> Sign Up Now !</Form.Link>
        </Form.Text>
        <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you are not a bot- 
            Please do not spam us !
        </Form.TextSmall>

        </Form>
        </HeaderContainer>
       <FooterContainer/>
       </>
    )
}
