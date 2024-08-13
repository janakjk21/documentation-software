// Visapagemodal.jsx

import React from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { updateShramStatus } from '../redux/tableSlice';

// Set the root element for the modal
Modal.setAppElement('#root');

const Visapagemodal = ({ isOpen, onClose, initialData }) => {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: initialData || {},
	});
	const Visaid = useSelector((state) => state.visaStatus); // Adjust the path to your table reducer
	const id = Visaid.setVisaid;
	console.log(Visaid.setVisaid, 'this is the visa id');
	const dispatch = useDispatch();
	console.log(id, 'this is the id');
	const onSubmit = (data) => {
		// Handle form submission
		const payload = {
			id,
			shramStatus: data, // Assuming shramStatus is a field in your form
		};
		dispatch(updateShramStatus(payload));
		console.log(payload, 'this is the payload');
		onClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel='Visa Page Modal'
			className='fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75'
			overlayClassName='fixed inset-0 bg-black bg-opacity-50'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-white p-6 rounded-lg shadow-lg w-full max-w-lg'>
				<h2 className='text-2xl font-bold mb-4'>Visa Page Details</h2>
				<div className='mb-4'>
					<label className='block text-gray-700'>Amount Paid</label>
					<input
						type='number'
						{...register('amountPaid')}
						className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700'>Orientation</label>
					<input
						type='text'
						{...register('orientation')}
						className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700'>Flight Date</label>
					<input
						type='date'
						{...register('flightDate')}
						className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700'>Flight Time</label>
					<input
						type='time'
						{...register('flightTime')}
						className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700'>Airlines Name</label>
					<input
						type='text'
						{...register('airlinesName')}
						className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
					/>
				</div>
				<div className='flex justify-end'>
					<button
						type='button'
						onClick={onClose}
						className='mr-4 px-4 py-2 bg-gray-300 rounded-md'>
						Cancel
					</button>
					<button
						type='submit'
						className='bg-blue-500 text-white p-2 rounded-md'>
						Submit
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default Visapagemodal;
