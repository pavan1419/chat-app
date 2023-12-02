// src/ChatComponents/Auth.js
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Auth() {
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    // Ensure that 'auth.signInWithPopup' is available
    if (auth.signInWithPopup) {
      auth.signInWithPopup(new window.firebase.auth.GoogleAuthProvider());
    } else {
      console.error('signInWithPopup is not available');
    }
  };

  return (
    <div>
      {user ? (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      )}
    </div>
  );
}

export default Auth;
