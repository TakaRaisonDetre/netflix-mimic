import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {FirebaseContext} from '../context/firebase'
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'
import {Form } from '../components'
import * as ROUTES from '../constants/routes';

export default function Signup() {
   const history = useHistory();
   const {firebase} = useContext(FirebaseContext)

   const [firstName, setFirstName] = useState('')
   
   const [emailAddress, setEmailAddress]= useState('');
   const [password, setPassword]=useState('');
   const [error, setError]=useState('');

   const isInValid = firstName === '' || password === '' || emailAddress === '';
   
   const handleSignup =(e)=>{
    e.preventDefault()  
    // firebase sign in
    firebase
    .auth()
    .createUserWithEmailAndPassword(emailAddress, password)
    .then((res)=> 
           res.user
            .updateProfile({
                displayName:firstName,
                photoURL: Math.floor(Math.random()*5)+1,

            })
            .then(()=>{
                history.push(ROUTES.BROWSE);
            }) 
    ).catch((error)=>{
        setFirstName('')
        setEmailAddress('')
        setPassword('')
        setError(error.message)
    })
   }


    return (
        <>
        <HeaderContainer>
     <Form>
     <Form.Title>Sign Up</Form.Title>
     {error && <Form.Error>{error}</Form.Error>}


    <Form.Base onSubmit={handleSignup} post="POST">
            <Form.Input
            placeholder="First name"
            value ={firstName}
            onChange = {({target})=>setFirstName(target.value)}
            ></Form.Input>
            <Form.Input
            placeholder="Email address"
            value ={emailAddress}
            onChange = {({target})=>setEmailAddress(target.value)}
            ></Form.Input>
            <Form.Input
            placeholder="Password"
            value ={password}
            onChange = {({target})=>setPassword(target.value)}
            ></Form.Input>
            <Form.Submit
               disabled={isInValid}
               type="submit"
             >Sign Up</Form.Submit>

        <Form.Text>Already a user
          <Form.Link to="/signin">Sign In</Form.Link>

        </Form.Text>
          <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you are not a bot

          </Form.TextSmall>
    </Form.Base>
     </Form>

        </HeaderContainer>
       <FooterContainer/>
       </>
    )
}
