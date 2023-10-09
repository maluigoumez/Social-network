import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export function callGoogle() {
  // Initialize Firebase authentication and GoogleAuthProvider
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // Trigger Google sign-in popup
  signInWithPopup(auth, provider)
    .then((result) => {
      // Handle successful login here

      // Access user information from the result object
      const user = result.user;
      const displayName = user.displayName;
      const email = user.email;
      const uid = user.uid;

      // Log successful login details to the console

      // Redirect to the feed.js file upon successful login
      window.location.assign('/feed');
      // You may need to adjust the path
      console.log(`Successful login for user: ${displayName} (${email})`);
    })

    .catch((error) => {
      // Handle login errors here

      // Extract error information
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      // Log the error to the console
      console.error('Google login error:', error);
    });
  // Return an empty object (not typically necessary)
  return {};
}
