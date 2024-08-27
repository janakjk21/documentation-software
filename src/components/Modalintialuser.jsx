import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import {
	saveUserData,
	updateUserData,
	deleteUserData,
} from '../redux/tableSlice'; // Adjust the import according to your file structure
import { useCreateDemandMutation } from '../redux/apitabledata';

// Set the root element for the modal
Modal.setAppElement('#root');

const ModalInitialUser = ({ loseModal, isModalOpen, companyId }) => {
	const { register, handleSubmit, reset } = useForm();
	const isOpen = isModalOpen;
	const onClose = loseModal;

	const [createDemand, { isLoading, isError, isSuccess }] =
		useCreateDemandMutation();

	const onSubmit = async (data) => {
		const formData = new FormData();
		//ToDo: problem occours here for the file submit
		// Append regular text fields
		formData.append('name', data.name);
		formData.append('passport_no', data.passport_no);
		formData.append('address', data.address);
		formData.append('status', 'pending');
		formData.append('passport_expiry', data.passport_expiry);

		// Append file inputs
		if (data.avatar[0]) formData.append('avatar', data.avatar[0]);
		if (data.medical[0]) formData.append('medical', data.medical[0]);
		if (data.original_passport[0])
			formData.append('original_passport', data.original_passport[0]);
		if (data.police_report[0])
			formData.append('police_report', data.police_report[0]);
		if (data.photo[0]) formData.append('photo', data.photo[0]);
		if (data.video[0]) formData.append('video', data.video[0]);
		if (data.certificate[0])
			formData.append('certificate', data.certificate[0]);

		try {
			const response = await axios.post(
				'http://127.0.0.1:8000/demand/1/userdemand',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);

			console.log('Response:', response.data);
			reset(); // Reset form after successful submission
			onClose(); // Close the modal
		} catch (error) {
			console.error('Submission error:', error);
			// Handle error (e.g., display an error message)
		}
	};
	const handleDelete = () => {};

	const calculateAge = (dob) => {
		const birthDate = new Date(dob);
		const today = new Date();
		let age = today.getFullYear() - birthDate.getFullYear();
		const monthDifference = today.getMonth() - birthDate.getMonth();
		if (
			monthDifference < 0 ||
			(monthDifference === 0 && today.getDate() < birthDate.getDate())
		) {
			age--;
		}
		return age;
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel='Initial User Modal'
			className='fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75'
			overlayClassName='fixed inset-0 bg-black bg-opacity-50'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl'>
				<h2 className='text-2xl font-bold mb-4'>User Information</h2>
				<div className='grid grid-cols-3 gap-4'>
					<div className='mb-4'>
						<label className='block text-gray-700'>Name</label>
						<input
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
							{...register('name')}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Passport</label>
						<input
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
							{...register('passport_no')}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Passport Expiry Date</label>
						<input
							type='date'
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
							{...register('passport_expiry')}
						/>
					</div>

					<div className='mb-4'>
						<label className='block text-gray-700'>Address</label>
						<input
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
							{...register('address')}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Nominee Name</label>
						<input
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
							{...register('nominee_name')}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Contact No</label>
						<input
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
							{...register('contact_no')}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Height</label>
						<input
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
							{...register('height')}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Weight</label>
						<input
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
							{...register('weight')}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Education</label>
						<input
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
							{...register('education')}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Work Experience</label>
						<input
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
							{...register('workexperience')}
						/>
					</div>
				</div>
				<div className='grid grid-cols-3 gap-4'>
					<div className='mb-4'>
						<label className='block text-gray-700'>Avatar</label>
						<input
							type='file'
							className='mt-1 block w-full text-gray-700'
							{...register('avatar')}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Medical</label>
						<input
							type='file'
							className='mt-1 block w-full text-gray-700'
							{...register('medical')}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Original Passport</label>
						<input
							type='file'
							className='mt-1 block w-full text-gray-700'
							{...register('original_passport')}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Police Report</label>
						<input
							type='file'
							className='mt-1 block w-full text-gray-700'
							{...register('police_report')}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Photo</label>
						<input
							type='file'
							className='mt-1 block w-full text-gray-700'
							{...register('photo')}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Video</label>
						<input
							type='file'
							className='mt-1 block w-full text-gray-700'
							{...register('video')}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Certificate</label>
						<input
							type='file'
							className='mt-1 block w-full text-gray-700'
							{...register('certificate')}
						/>
					</div>
				</div>
				<div className='flex justify-between items-center'>
					<button
						type='submit'
						className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
						Submit
					</button>

					<button
						type='button'
						onClick={handleDelete}
						className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>
						Delete
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default ModalInitialUser;
