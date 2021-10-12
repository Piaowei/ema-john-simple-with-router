import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	const signInUsingGoogle = () => {

		return signInWithPopup(auth, googleProvider);
	}

	const logOut = () => {
		signOut(auth).then(() => {
			// Sign-out successful.
			setUser({})
		});
		// .catch((error) => {
		// 	// An error happened.
		// });
	}
	// Observe user state you meiyou
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				setUser(user);
				// ...
			}
		});
	}, [])

	return {
		user,
		signInUsingGoogle,
		logOut,
	}

}

export default useFirebase;