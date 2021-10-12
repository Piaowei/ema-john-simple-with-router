import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/usefirebase';
import "./Login.css";

const Login = () => {
	// const { user, signInUsingGoogle } = useFirebase();
	const { user, signInUsingGoogle } = useAuth();
	const history = useHistory();
	const location = useLocation();
	const redirect_uri = location.state?.from || '/shop';
	// console.log("came from", location.state?.from);

	const handleGoogleLogin = () => {
		signInUsingGoogle()
			.then(result => {
				history.push(redirect_uri)
			})
	}

	return (
		<div className="login-form">
			<div>
				<h2>Login</h2>
				<form >
					<input type="email" name="" id="" placeholder="Your Email" />
					<br />

					<input type="password" name="" id="" placeholder=" password" />
					<br />

					<input type="re-enter password" name="" id="" placeholder=" password" />

					<br />
					<input type="text" />
				</form>
				<p>New to ema-john ?<Link to="/register" >Create account</Link></p>
				<div>-------or--------</div>
				<button className="btn-regular" onClick={handleGoogleLogin} >Google Sign-in</button>
			</div>


		</div>
	);
};

export default Login;