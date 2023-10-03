import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function callGoogle() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // // The signed-in user info.
      // const user = result.user;
      // // IdP data available using getAdditionalUserInfo(result)
      // // ...
      // })

      // Handle successful login here
      // Access user information from the result object
      const user = result.user;
      const displayName = user.displayName;
      const email = user.email;
      const uid = user.uid;

      // You can now perform actions based on the user's information
      console.log(`Successful login for user: ${displayName} (${email})`);

      // Redirect to the feed.js file upon successful login
      window.location.href = "./pages/feed.js"; // You may need to adjust the path
    })

    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.error("Google login error:", error);
    });
  return {};
}
