import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { saveProfile } from '../redux/companyProfileSlice';

function CompanyProfileModal({ isOpen, onClose, onSave, profile, id }) {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: profile || {},
	});
	const dispatch = useDispatch();

	const onSubmit = (data) => {
		const updatedData = {
			...data,
			countryId: id, // Ensure countryId is includ
		};
		dispatch(saveProfile(updatedData));
		reset();
		onSave();
	};
	if (!isOpen) return null;
	return (
		<div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
			<div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-1/2'>
				<h2 className='text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100'>
					{profile ? 'Edit Profile' : 'Add Profile'}
				</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='flex space-x-4'>
						<div className='flex-1'>
							<label className='block text-gray-700 dark:text-gray-300'>
								Name
							</label>
							<input
								type='text'
								{...register('name')}
								className='w-full p-2 border border-gray-300 rounded'
							/>
						</div>
						<div className='flex-1'>
							<label className='block text-gray-700 dark:text-gray-300'>
								LT No
							</label>
							<input
								type='text'
								{...register('LTNo')}
								className='w-full p-2 border border-gray-300 rounded'
							/>
						</div>
					</div>
					<div className='flex space-x-4 mt-4'>
						<div className='flex-1'>
							<label className='block text-gray-700 dark:text-gray-300'>
								Country
							</label>
							<input
								type='text'
								{...register('country')}
								className='w-full p-2 border border-gray-300 rounded'
							/>
						</div>
						<div className='flex-1'>
							<label className='block text-gray-700 dark:text-gray-300'>
								Salary
							</label>
							<input
								type='number'
								{...register('salary')}
								className='w-full p-2 border border-gray-300 rounded'
							/>
						</div>
					</div>
					<div className='flex space-x-4 mt-4'>
						<div className='flex space-x-4 mt-4'>
							<div className='flex-1'>
								<label className='block text-gray-700 dark:text-gray-300'>
									Categories
								</label>
								<input
									type='text'
									{...register('categories')}
									className='w-full p-2 border border-gray-300 rounded'
									placeholder='Enter categories separated by commas'
								/>
							</div>
						</div>
						<div className='flex-1'>
							<label className='block text-gray-700 dark:text-gray-300'>
								Demand
							</label>
							<input
								type='number'
								{...register('demand')}
								className='w-full p-2 border border-gray-300 rounded'
							/>
						</div>
					</div>
					<div className='flex space-x-4 mt-4'>
						<div className='flex-1'>
							<label className='block text-gray-700 dark:text-gray-300'>
								Logo
							</label>
							<input
								type='file'
								accept='image/*'
								{...register('logo')}
								className='w-full p-2 border border-gray-300 rounded'
							/>
						</div>
						<div className='flex-1'>
							<label className='block text-gray-700 dark:text-gray-300'>
								Age Range (Min)
							</label>
							<input
								type='number'
								min='18'
								max='65'
								{...register('ageMin')}
								className='w-full p-2 border border-gray-300 rounded'
							/>
						</div>
						<div className='flex-1'>
							<label className='block text-gray-700 dark:text-gray-300'>
								Age Range (Max)
							</label>
							<input
								type='number'
								min='18'
								max='65'
								{...register('ageMax')}
								className='w-full p-2 border border-gray-300 rounded'
							/>
						</div>
					</div>
					<div className='flex space-x-4 mt-4'>
						<div className='flex-1'>
							<label className='block text-gray-700 dark:text-gray-300'>
								Pax
							</label>
							<input
								type='number'
								{...register('pax')}
								className='w-full p-2 border border-gray-300 rounded'
							/>
						</div>
						<div className='flex-1'>
							<label className='block text-gray-700 dark:text-gray-300'>
								Compony code
							</label>
							<input
								type='number'
								step='0.1'
								{...register('Componycode')}
								className='w-full p-2 border border-gray-300 rounded'
							/>
						</div>
					</div>
					<div className='flex space-x-4 mt-4'>
						<div className='flex-1'>
							<label className='block text-gray-700 dark:text-gray-300'>
								Male
							</label>
							<input
								type='number'
								{...register('male')}
								className='w-full p-2 border border-gray-300 rounded'
							/>
						</div>
						<div className='flex-1'>
							<label className='block text-gray-700 dark:text-gray-300'>
								Female
							</label>
							<input
								type='number'
								{...register('female')}
								className='w-full p-2 border border-gray-300 rounded'
							/>
						</div>
					</div>
					<div className='flex space-x-4 mt-4'>
						<div className='flex-1'>
							<label className='block text-gray-700 dark:text-gray-300'>
								Interview Type
							</label>
							<input
								type='text'
								{...register('interviewType')}
								className='w-full p-2 border border-gray-300 rounded'
							/>
						</div>
						<div className='flex-1'>
							<label className='block text-gray-700 dark:text-gray-300'>
								Contract Year
							</label>
							<input
								type='number'
								{...register('contractYear')}
								className='w-full p-2 border border-gray-300 rounded'
							/>
						</div>
					</div>
					<div className='flex-1'>
						<label className='block text-gray-700 dark:text-gray-300'>
							Remarks
						</label>
						<textarea
							{...register('remarks')}
							className='w-full p-2 border border-gray-300 rounded'
						/>
					</div>
					<div className='flex justify-end mt-6'>
						<button
							type='button'
							onClick={onClose}
							className='mr-4 px-4 py-2 bg-gray-500 text-white rounded'>
							Cancel
						</button>
						<button
							type='submit'
							className='px-4 py-2 bg-blue-500 text-white rounded'>
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CompanyProfileModal;
