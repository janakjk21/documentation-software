import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createStaff } from '../redux/staff';

const StaffFormModal = ({ isOpen, onClose }) => {
	const { register, handleSubmit, reset } = useForm();
	const dispatch = useDispatch();
	const onSubmit = async (data) => {
		const formData = new FormData();
		formData.append('email', data.email);
		formData.append('password', data.password);
		formData.append('avatar', data.avatar[0]); // Assuming avatar is a file input
		formData.append('name', data.name);
		formData.append('is_admin_user', data.is_admin_user ? 'True' : 'False');

		try {
			const response = await fetch('http://127.0.0.1:8000/users/register', {
				method: 'POST',
				body: formData,
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const result = await response.json();
			console.log('Success:', result);

			dispatch(createStaff(result));
			reset();
			onClose();
		} catch (error) {
			console.error('Error:', error);
		}
	};

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
			<div className='bg-white p-6 rounded shadow-lg max-w-md w-full'>
				<h2 className='text-2xl mb-4'>Add Staff</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='mb-4'>
						<label className='block text-gray-700'>Avatar</label>
						<input
							type='file'
							{...register('avatar', { required: true })}
							className='w-full p-2 border border-gray-300 rounded mt-1'
							accept='image/*'
							required
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Email</label>
						<input
							type='email'
							{...register('email', { required: true })}
							className='w-full p-2 border border-gray-300 rounded mt-1'
							required
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Passport</label>
						<input
							type='text'
							{...register('passport', { required: true })}
							className='w-full p-2 border border-gray-300 rounded mt-1'
							required
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Admin</label>
						<input type='checkbox' {...register('isAdmin')} className='mt-1' />
					</div>
					<button type='submit' className='bg-blue-500 text-white p-2 rounded'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default StaffFormModal;
