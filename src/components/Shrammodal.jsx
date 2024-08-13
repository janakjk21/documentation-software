import React from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';

// Set the root element for the modal
Modal.setAppElement('#root');

function ShramModal({ isOpen, onClose, onSave }) {
	const { register, handleSubmit, setValue } = useForm();

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setValue('ticketConfirmed', file);
	};

	const handleSave = (data) => {
		onSave(data);
		onClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-20'
			overlayClassName='fixed inset-0 bg-black/30'
			contentLabel='Shram Modal'>
			<div className='relative'>
				<button
					onClick={onClose}
					className='absolute top-3 right-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'>
					<span className='sr-only'>Close</span>
					&times;
				</button>

				<h2 className='text-xl font-bold text-gray-800 dark:text-gray-100 mb-4'>
					Shram Modal
				</h2>

				<form className='space-y-4' onSubmit={handleSubmit(handleSave)}>
					<div className='mb-5'>
						<label className='block text-sm font-medium mb-2'>
							Ticket Confirmed (Upload):
						</label>
						<input
							type='file'
							{...register('ticketConfirmed')}
							onChange={handleFileChange}
							className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
							required
						/>
					</div>

					<div className='mb-5'>
						<label className='block text-sm font-medium mb-2'>
							Flight Completed:
						</label>
						<input
							type='checkbox'
							{...register('flightCompleted')}
							className='w-4 h-4 border border-gray-300 rounded'
						/>
					</div>

					<div className='flex justify-center'>
						<button
							type='submit'
							className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md'>
							Submit
						</button>
					</div>
				</form>
			</div>
		</Modal>
	);
}

export default ShramModal;
