import React, {useState, useEffect} from 'react'
import Firebase from '../../config/Firebase'
import Profile from '../Profile/Profile'
import Login from './Login'

export default function Auth() {
	const [user, setUser] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [uid, setUid] = useState('');
 const [hasAccount, setHasAccount] = useState(true);

 const clearInputs = () => {
		setEmail('');
		setPassword('');
	};

	const clearErrors = () => {
		setEmailError('');
		setPasswordError('');
	};
 
 const handleLogin = (e) => {
		e.preventDefault();
		clearErrors();
  Firebase.auth()
  .signInWithEmailAndPassword(email, password)
  .catch((err) => {
   switch(err.code) {
    case 'auth/invalid-email':
    case 'auth/user-disabled':
    case 'auth/user-not-found':
     setEmailError(err.message);
     break;
     case 'auth/wrong-password':
						setPasswordError(err.message);
						break;
						default:
   }
		})
		console.log('Email: ', email);
 }

 const handleSignup = (e) => {
		e.preventDefault();
  clearErrors();
		Firebase.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch((err) => {
				switch (err.code) {
					case 'auth/email-already-in-use':
					case 'auth/invalid-email':
						setEmailError(err.message);
						break;
					case 'auth/weak-password':
						setPasswordError(err.message);
						break;
						default:
				}
			});

			
 };
 
	const authListener = () => {
		Firebase.auth().onAuthStateChanged(user => {
			if (user) {
				clearInputs();
				setUser(user);
				setUid(user.uid);
				setEmail(user.email);
			} else {
				setUser('');
			}
		});
	};


	useEffect(() => {
		authListener();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
 return(
  <>
     { user ? (
      <Profile email={email} uid={uid} />
    ) : (
    <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      name={name}
      setName={setName}
      uid={uid}
      setUid={setUid}
    />
    )}
   </>
 )

} 