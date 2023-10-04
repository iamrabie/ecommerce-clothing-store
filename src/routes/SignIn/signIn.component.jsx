import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';


import SignUp from '../../components/SignUp/sign_up.component';


const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
   /*  console.log({user}); we can use response variable as well*/
    const userDocRef = await createUserDocumentFromAuth(user);
  };
/* 
  const logRedirectUser = async () => {
    const { user } = await signIn_Redirect();
    console.log({user});
  };
 */
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
     {/*  <button onClick={logRedirectUser}>Sign in with Redirect</button> */}

      <SignUp />
    </div>
  );
};

export default SignIn;