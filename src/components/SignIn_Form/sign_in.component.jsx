import { useState } from 'react';
/* import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth';
 */

import FormInput from '../FormInput/form_input.component';
import './sign_in.styles.scss';
import Button from '../Button/button.component';
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    SignIn_With_Email_Password
  } from '../../utils/firebase.utils';
  
/* import { create_users_with_email_and_pass , create_userDoc_with_email_pass_auth, auth } from '../../utils/firebase.utils';
 */
const SignIn = () =>
{

    const [formFields , setFormFields] = useState({ email : '' , password : ''});
  /*   console.log('form fields :' , formFields); */

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleEmail = (e) =>
    {
        setFormFields({
            ...formFields,
            email:e.target.value
        });
    }

    const handlePassword = (e) =>
    {
        setFormFields({
            ...formFields,
            password:e.target.value
        });
    }

    const handleSubmit = async(event) =>
    {

        event.preventDefault();

        try{
            const response = await SignIn_With_Email_Password(formFields.email , formFields.password);
            console.log("response is " , response);
            setFormFields({
                email: '',
                password : '',
            });


        }catch(err)
        {
           
           if (err.code == 'auth/invalid-login-credentials')
           {
             alert('invalid credentials!');
           }
/* 
           switch (err.code)
           {
               case 'auth/invalid-login-credentials':
               alert('invalid credentials!');
               break;

               case 'auth/user-not-found':
               alert('no user associated with this email!');
               break;

               case 'auth/wrong-password':
               alert('incorrect password!');
               break;

               default:
                   console.log('error message is :' , err.message);
           } */

        }
    
    } 


    /* console.log('form fields  after:' , formFields); */

    return(
        <>
        <div className='sign_up_container'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>

            {/* <input type="email" onChange={handleEmail} value={formFields.email} required/> */}
            <FormInput
                label='Email'
                type='email'
                required
                onChange={handleEmail}
                name='email'
                value={formFields.email}
            />

            {/* <input type="password" onChange={handlePassword} value={formFields.password} required/> */}
            <FormInput
                label='Password'
                type='password'
                required
                onChange={handlePassword}
                name='password'
                value={formFields.password}
            />

            <div className='buttons-container'>
                <Button type='submit'>Sign In</Button>
                <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
            </div>

        </form>
        </div>
        </>
    );
}


export default SignIn;