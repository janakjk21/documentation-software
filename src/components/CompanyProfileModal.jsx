import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { saveProfile } from '../redux/companyProfileSlice';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

function CompanyProfileModal({ isOpen, onClose, onSave, profile, demand }) {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: profile || {},
	});
	// submit logic
	const onSubmit = async (data) => {
		const formData = new FormData();
		for (const key in data) {
			if (
				key === 'logo' &&
				data[key] instanceof FileList &&
				data[key].length > 0
			) {
				formData.append(key, data[key][0]);
			} else {
				formData.append(key, data[key]);
			}
		}
		try {
			const response = await axios.post(
				'http://127.0.0.1:8000/demand/',
				formData
			);
			console.log(response.data, 'response');
			// Handle the response if needed
			// Show a toast for successful creation
			toast.success('🦄 created successfully !', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
			// Set the same data on the demand
			demand(data);

			// Re-render the parent component
			onSave();
		} catch (error) {
			// Handle the error if needed
			console.error(error);
			// Show a toast for error
			toast.error('🦄 something went wrong !', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
		}
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
								{...register('lot_no')}
								className='w-full p-2 border border-gray-300 rounded'
							/>
						</div>
					</div>
					<div className='flex space-x-4 mt-4'>
						<div className='flex-1'>
							<label className='block text-gray-700 dark:text-gray-300'>
								Country
							</label>
							<select
								{...register('country')}
								className='w-full p-2 border border-gray-300 rounded'>
								<option value=''>Select Country</option>
								<option value='Malaysia'>Malaysia</option>
								<option value='Dubai'>Dubai</option>
								<option value='Qatar'>Qatar</option>
								<option value='Kuwait'>Kuwait</option>
							</select>
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
									{...register('category')}
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
								{...register('min_age')}
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
								{...register('max_age')}
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
								{...register('company_code')}
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
								{...register('interview_type')}
								className='w-full p-2 border border-gray-300 rounded'
							/>
						</div>
						<div className='flex-1'>
							<label className='block text-gray-700 dark:text-gray-300'>
								Contract Year
							</label>
							<input
								type='number'
								{...register('contract_year')}
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
			<ToastContainer
				position='bottom-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
				transition:Bounce
			/>{' '}
		</div>
	);
}

export default CompanyProfileModal;
