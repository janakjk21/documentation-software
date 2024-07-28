import React, { useState } from 'react';
import Modal from 'react-modal';

// Set the root element for the modal
Modal.setAppElement('#root');

function ShramModal({ isOpen, onClose }) {
	const [formData, setFormData] = useState({
		readyToShram: false,
		shramApplied: false,
		shramReceived: null,
		readyToFlight: false,
		ticketConfirmed: null,
		flightCompleted: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === 'checkbox' ? checked : value,
		});
	};

	const handleFileChange = (e) => {
		const { name } = e.target;
		setFormData({ ...formData, [name]: e.target.files[0] });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log(formData);
		onClose(); // Close the modal after form submission
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel='Shram Modal'
			className='w-full max-w-lg p-8 bg-white shadow-lg rounded-lg'
			overlayClassName='fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50'>
			<button
				onClick={onClose}
				className='absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none'>
				&times;
			</button>
			<h2 className='text-2xl font-bold mb-6 text-gray-800 text-center'>
				Shram Form
			</h2>

			<form onSubmit={handleSubmit}>
				<div className='mb-5'>
					<label className='block text-sm font-medium mb-2'>
						Ready to Shram:
					</label>
					<input
						type='checkbox'
						name='readyToShram'
						checked={formData.readyToShram}
						onChange={handleChange}
						className='w-4 h-4 border border-gray-300 rounded'
					/>
				</div>

				<div className='mb-5'>
					<label className='block text-sm font-medium mb-2'>
						Shram Applied:
					</label>
					<input
						type='checkbox'
						name='shramApplied'
						checked={formData.shramApplied}
						onChange={handleChange}
						className='w-4 h-4 border border-gray-300 rounded'
					/>
				</div>

				<div className='mb-5'>
					<label className='block text-sm font-medium mb-2'>
						Shram Received (Upload):
					</label>
					<input
						type='file'
						name='shramReceived'
						onChange={handleFileChange}
						className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
						required
					/>
				</div>

				<div className='mb-5'>
					<label className='block text-sm font-medium mb-2'>
						Ready to Flight:
					</label>
					<input
						type='checkbox'
						name='readyToFlight'
						checked={formData.readyToFlight}
						onChange={handleChange}
						className='w-4 h-4 border border-gray-300 rounded'
					/>
				</div>

				<div className='mb-5'>
					<label className='block text-sm font-medium mb-2'>
						Ticket Confirmed (Upload):
					</label>
					<input
						type='file'
						name='ticketConfirmed'
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
						name='flightCompleted'
						checked={formData.flightCompleted}
						onChange={handleChange}
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
		</Modal>
	);
}

export default ShramModal;
