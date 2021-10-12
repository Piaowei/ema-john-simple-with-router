import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './shipping.css';

const Shipping = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const { user } = useAuth();
	const onSubmit = data => console.log(data);
	return (
		<div>
			<form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

				<input defaultValue={user.displayName}  {...register("name")} />
				<input defaultValue={user.email} placeholder="email" {...register("email", { required: true })} />
				{errors.email && <span className="error ">This field is required</span>}
				<input defaultValue="" placeholder="Address" {...register("Address")} />
				<input defaultValue="" placeholder="City"  {...register("City")} />
				<input defaultValue="" placeholder="Phone" {...register("Phone")} />

				<input type="submit" />
			</form>
		</div>
	);
};

export default Shipping;