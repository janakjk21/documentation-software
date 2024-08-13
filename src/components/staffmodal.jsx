import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createStaff } from '../redux/staff';

const StaffFormModal = ({ isOpen, onClose }) => {
	const { register, handleSubmit, reset } = useForm();
	const dispatch = useDispatch();

	const onSubmit = (data) => {
		dispatch(createStaff(data));
		reset();
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
			<div className='bg-white p-6 rounded shadow-lg max-w-md w-full'>
				<h2 className='text-2xl mb-4'>Add Staff</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='mb-4'>
						<label className='block text-gray-700'>Name</label>
						<input
							type='text'
							{...register('name', { required: true })}
							className='w-full p-2 border border-gray-300 rounded mt-1'
							required
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Avatar URL</label>
						<input
							type='text'
							{...register('avatar', { required: true })}
							className='w-full p-2 border border-gray-300 rounded mt-1'
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
					<button type='submit' className='bg-blue-500 text-white p-2 rounded'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default StaffFormModal;
