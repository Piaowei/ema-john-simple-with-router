import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className="login-form">
			<div>
				<h2>Create account</h2>
				<form >
					<input type="email" name="" id="" placeholder="Your email" />
					<br />
					<input type="password" name="" id="" placeholder="Your Password" />
					<br />
					<input type="password" name="" id="" placeholder="Your Password" />
					<br />
					<input type="submit" />
				</form>
				<p>Already have an account <Link to="/login" >Login</Link> </p>
				<button className="btn-regular" >Google Sign In</button>
			</div>
		</div>
	);
};

export default Register;