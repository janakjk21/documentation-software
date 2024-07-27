// Initailform.js

import React, { useState } from 'react';

function Initailform() {
	const [formData, setFormData] = useState({
		name: '',
		address: '',
		dob: '',
		agent: '',
		photo: null,
		passportScan: null,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleFileChange = (e) => {
		const { name } = e.target;
		setFormData({ ...formData, [name]: e.target.files[0] });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log(formData);
	};

	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100'>
			<form
				onSubmit={handleSubmit}
				className='w-full max-w-lg p-8 bg-white shadow-lg rounded-lg'>
				<h2 className='text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center'>
					Registration Form
				</h2>

				<div className='mb-5'>
					<label htmlFor='name' className='block text-sm font-medium mb-2'>
						Name:
					</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
						placeholder='Enter your name'
						required
					/>
				</div>

				<div className='mb-5'>
					<label htmlFor='photo' className='block text-sm font-medium mb-2'>
						Photo (Upload):
					</label>
					<input
						type='file'
						id='photo'
						name='photo'
						onChange={handleFileChange}
						className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
						required
					/>
				</div>

				<div className='mb-5'>
					<label htmlFor='address' className='block text-sm font-medium mb-2'>
						Address:
					</label>
					<textarea
						id='address'
						name='address'
						value={formData.address}
						onChange={handleChange}
						className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
						placeholder='Enter your address'
						required
					/>
				</div>

				<div className='mb-5'>
					<label
						htmlFor='passportScan'
						className='block text-sm font-medium mb-2'>
						Passport Scan (Upload):
					</label>
					<input
						type='file'
						id='passportScan'
						name='passportScan'
						onChange={handleFileChange}
						className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
						required
					/>
				</div>

				<div className='mb-5'>
					<label htmlFor='dob' className='block text-sm font-medium mb-2'>
						Date of Birth:
					</label>
					<input
						type='date'
						id='dob'
						name='dob'
						value={formData.dob}
						onChange={handleChange}
						className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
						required
					/>
				</div>

				<div className='mb-5'>
					<label htmlFor='agent' className='block text-sm font-medium mb-2'>
						Agent:
					</label>
					<input
						type='text'
						id='agent'
						name='agent'
						value={formData.agent}
						onChange={handleChange}
						className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
						placeholder="Enter agent's name"
						required
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
	);
}

export default Initailform;
