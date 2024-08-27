import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import loginReducer from '../redux/user'; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = async (data) => {
		try {
			const response = await fetch('http://127.0.0.1:8000/users/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const result = await response.json();
			console.log('Success:', result);

			// Assuming result contains userData and tokens
			const payload = {
				userData: result.user, // Adjust according to your API response structure
				tokens: result.tokens, // Adjust according to your API response structure
			};

			dispatch({ type: 'LOGIN_SUCCESS', payload }); // Dispatch success action with the payload
			navigate('/'); // Redirect to the dashboard page
		} catch (error) {
			console.error('Error:', error);
			dispatch({ type: 'LOGIN_FAILURE' }); // Dispatch failure action // Dispatch failure action
		}
	};

	return (
		<div className='mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0'>
			<a
				href='https://demo.themesberg.com/windster/'
				className='text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10'>
				<img
					src='https://demo.themesberg.com/windster/images/logo.svg'
					className='h-10 mr-4'
					alt='Windster Logo'
				/>
				<span className='self-center text-2xl font-bold whitespace-nowrap'>
					Windster
				</span>
			</a>

			<div className='bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0'>
				<div className='p-6 sm:p-8 lg:p-16 space-y-8'>
					<h2 className='text-2xl lg:text-3xl font-bold text-gray-900'>
						Sign in to platform
					</h2>
					<form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label
								htmlFor='email'
								className='text-sm font-medium text-gray-900 block mb-2'>
								Email
							</label>
							<input
								id='email'
								type='email'
								{...register('email', { required: true })}
								className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
							/>
							{errors.email && <span>This field is required</span>}
						</div>
						<div>
							<label
								htmlFor='password'
								className='text-sm font-medium text-gray-900 block mb-2'>
								Password
							</label>
							<input
								id='password'
								type='password'
								{...register('password', { required: true })}
								className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
							/>
							{errors.password && <span>This field is required</span>}
						</div>
						<button
							type='submit'
							className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
							Sign in
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
