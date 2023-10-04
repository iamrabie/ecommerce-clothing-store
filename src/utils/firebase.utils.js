// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , signInWithPopup , GoogleAuthProvider , createUserWithEmailAndPassword} from 'firebase/auth';
import { getFirestore , doc , getDoc , setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCRLWPXQvKjaPvBrARfslTH6tifB-Ew69g",
    authDomain: "ecommerce-clothing-store-542d3.firebaseapp.com",
    projectId: "ecommerce-clothing-store-542d3",
    storageBucket: "ecommerce-clothing-store-542d3.appspot.com",
    messagingSenderId: "1056977371127",
    appId: "1:1056977371127:web:c81852d4cb65a5acabb8f2"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

//getting auth
export const auth = getAuth();

//function to sign in with google popup 
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//creating db
export const db = getFirestore();


//FUNCTION for creating user doc from user auth; getting uid here
export const createUserDocumentFromAuth = async (userAuth) => {
  
  if ( !userAuth) return;
  
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};


//FUNCTION for Sign up: for creatng users with email and password
export const create_users_with_email_and_pass = async(email , password ) =>
{
  if ( !email || !password) return;
  return await createUserWithEmailAndPassword( auth , email , password );
}


//FUNCTON  for creating user doc with email and password method
export const create_userDoc_with_email_pass_auth = async(name , data) =>
{
 /*  console.log('name is ' , name);
  console.log('user uid' , data.uid);
  console.log('user email' , data.email); */

  if (!name || !data.uid)
  {
    return;
  }

  const user_doc_ref = doc( db , 'users_' , data.uid);
  const user_snapshot = await getDoc(user_doc_ref);

  if (!user_snapshot.exists())
  {
  /*   const user_data = {
      name:name,
      email:data.email,
      id:data.uid
    }; */

    const createdAt = new Date();

    /* console.log('user data from new collection ' , user_data);
 */
    try
    {
      await setDoc(user_doc_ref , {
        displayName:name,
        email:data.email,
        createdAt:createdAt
      });

    }catch(err)
    {
      console.log('err from user_ is ' , err.message);
    }
  }

  return user_doc_ref;
}