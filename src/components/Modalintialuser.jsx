import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
	saveUserData,
	updateUserData,
	deleteUserData,
} from '../redux/tableSlice'; // Adjust the import according to your file structure

// Set the root element for the modal
Modal.setAppElement('#root');

const ModalInitialUser = ({ isOpen, onClose }) => {
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.visaStatus.userId);
	const data = useSelector((state) => state.table.data);

	const initialData = data.find((item) => item.id === userId);
	console.log(initialData, 'this is the initial data');
	const { register, handleSubmit, setValue } = useForm();

	const companyUrlId = useSelector((state) => state.visaStatus.companyUrlId);
	useEffect(() => {
		if (initialData) {
			Object.keys(initialData).forEach((key) => {
				if (
					key === 'avatar' ||
					key === 'medical' ||
					key === 'originalPassport' ||
					key === 'policeReport' ||
					key === 'photo' ||
					key === 'video' ||
					key === 'certificate'
				) {
					// Handle file inputs
					try {
						const fileData = initialData[key];
						console.log(`Processing file for key: ${key}`, fileData);
						if (
							fileData instanceof FileList &&
							fileData.length > 0 &&
							fileData[0].name &&
							fileData[0].type &&
							fileData[0].size > 0
						) {
							const file = new File([fileData[0]], fileData[0].name, {
								type: fileData[0].type,
							});
							setValue(key, file);
							console.log(`File set for key: ${key}`);
						} else {
							console.warn(`Invalid file data for key: ${key}`, fileData);
						}
					} catch (error) {
						console.error(`Error setting file for key: ${key}`, error);
					}
				} else {
					// Handle other inputs
					setValue(key, initialData[key]);
					console.log(`Value set for key: ${key}`);
				}
			});
		}
	}, [initialData, setValue]);

	const onSubmit = (formData) => {
		formData.companyId = companyUrlId;
		formData.age = calculateAge(formData.dateOfBirth);
		console.log(formData, 'this is the data');

		dispatch(saveUserData(formData));

		onClose();
	};

	const handleDelete = () => {
		if (initialData && initialData.id) {
			dispatch(deleteUserData(initialData.id));
			onClose();
		}
	};

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
						<label className='block text-gray-700'>Passport Expiry Date</label>
						<input
							type='date'
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
							{...register('passportExpiryDate')}
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
							{...register('nomineeName')}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Contact No</label>
						<input
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
							{...register('contactNo')}
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
							{...register('workExperience')}
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
							{...register('originalPassport')}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Police Report</label>
						<input
							type='file'
							className='mt-1 block w-full text-gray-700'
							{...register('policeReport')}
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
					{initialData && initialData.id && (
						<button
							type='button'
							onClick={handleDelete}
							className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>
							Delete
						</button>
					)}
				</div>
			</form>
		</Modal>
	);
};

export default ModalInitialUser;
