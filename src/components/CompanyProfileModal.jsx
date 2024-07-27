import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaTimes, FaSave, FaArrowRight } from 'react-icons/fa';

// Set the root element for the modal
Modal.setAppElement('#root');

function CompanyProfileModal({ isOpen, onClose, onSave }) {
	const [name, setName] = useState('');
	const [country, setCountry] = useState('');
	const [salary, setSalary] = useState('');
	const [skills, setSkills] = useState('');
	const [demand, setDemand] = useState('');

	const handleSave = () => {
		onSave({ name, country, salary, skills, demand });
		onClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-20'
			overlayClassName='fixed inset-0 bg-black/30'
			contentLabel='Company Profile Modal'>
			<div className='relative'>
				<button
					onClick={onClose}
					className='absolute top-3 right-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'>
					<FaTimes className='w-6 h-6' aria-hidden='true' />
				</button>

				<h2 className='text-xl font-bold text-gray-800 dark:text-gray-100 mb-4'>
					Company Profile
				</h2>

				<form className='space-y-4'>
					<div>
						<label className='block text-gray-700 dark:text-gray-300'>
							Company Name
						</label>
						<input
							type='text'
							value={name}
							onChange={(e) => setName(e.target.value)}
							className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm'
						/>
					</div>

					<div>
						<label className='block text-gray-700 dark:text-gray-300'>
							Country
						</label>
						<input
							type='text'
							value={country}
							onChange={(e) => setCountry(e.target.value)}
							className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm'
						/>
					</div>

					<div>
						<label className='block text-gray-700 dark:text-gray-300'>
							Salary
						</label>
						<input
							type='text'
							value={salary}
							onChange={(e) => setSalary(e.target.value)}
							className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm'
						/>
					</div>

					<div>
						<label className='block text-gray-700 dark:text-gray-300'>
							Skills
						</label>
						<input
							type='text'
							value={skills}
							onChange={(e) => setSkills(e.target.value)}
							className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm'
						/>
					</div>

					<div>
						<label className='block text-gray-700 dark:text-gray-300'>
							Number of Demands
						</label>
						<input
							type='text'
							value={demand}
							onChange={(e) => setDemand(e.target.value)}
							className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm'
						/>
					</div>

					<div className='flex justify-end gap-2 mt-4'>
						<button
							type='button'
							onClick={handleSave}
							className='bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center'>
							<FaSave className='mr-2' /> Save
						</button>

						<button
							type='button'
							onClick={onClose}
							className='bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300 flex items-center'>
							<FaArrowRight className='mr-2' /> Cancel
						</button>
					</div>
				</form>
			</div>
		</Modal>
	);
}

export default CompanyProfileModal;
