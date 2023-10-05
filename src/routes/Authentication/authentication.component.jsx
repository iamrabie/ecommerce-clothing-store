import SignUp from '../../components/SignUp_Form/sign_up.component';
import SignIn from '../../components/SignIn_Form/sign_in.component';
import './authentication.styles.scss';

const Authentication = () => {
  
/* 
  const logRedirectUser = async () => {
    const { user } = await signIn_Redirect();
    console.log({user});
  };
 */
  return (

    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
 
  );
};

export default Authentication;