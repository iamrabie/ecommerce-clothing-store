import { useState } from 'react';
/* import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth';
 */

import FormInput from '../FormInput/form_input.component';
import './sign_up.styles.scss';
import Button from '../Button/button.component';

import { create_users_with_email_and_pass , create_userDoc_with_email_pass_auth, auth } from '../../utils/firebase.utils';
const SignUp = () =>
{

    const [formFields , setFormFields] = useState({ name: '' , email : '' , password : '' , confirmPassword:'' });
  /*   console.log('form fields :' , formFields); */

    const handleName = (e) =>
    {
        setFormFields({
            ...formFields,
            name:e.target.value
        });
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

    const handleConfirmPassword = (e) =>
    {
        setFormFields({
            ...formFields,
            confirmPassword:e.target.value
        });
    }

    const handleSubmit = async(event) =>
    {

        event.preventDefault();
        /* createUserWithEmailAndPassword( getAuth() ,formFields.email , formFields.password); */

        if ( formFields.password !== formFields.confirmPassword )
        {
            alert('passwords do not match!');
            return;
        }

        try{
            const response = await create_users_with_email_and_pass(formFields.email , formFields.password);
            console.log('response is : '  , response);
            // const uid = await auth().currentUser?.uid;
            // console.log(uid)
            const data = await create_userDoc_with_email_pass_auth(formFields.name , response.user);
        
        }catch(err)
        {
            console.log('sign up error' , err.message);
        }
        setFormFields({
            name : '',
            email: '',
            password : '',
            confirmPassword : ''
        });
    } 


    /* console.log('form fields  after:' , formFields); */

    return(
        <>
        <div className='sign_up_container'>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>

           {/*  <input type="text" onChange={handleName} value={formFields.name} required/> */}
            <FormInput
                label='Display Name'
                type='text'
                required
                onChange={handleName}
                name='displayName'
                value={formFields.name}
            />

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

          {/*   <input type="password" onChange={handleConfirmPassword} value={formFields.confirmPassword} required/> */}
            <FormInput
                label='Confirm Password'
                type='password'
                required
                onChange={handleConfirmPassword}
                name='confirmPassword'
                value={formFields.confirmPassword}
            />

            <Button type='submit'>Sign Up</Button>

        </form>
        </div>
        </>
    );
}


export default SignUp;