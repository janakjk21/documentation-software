import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	updateUserStatus,
	deleteAllUserData,
	updateVisaStatus,
	updateShramStatus,
} from '../redux/tableSlice';
import { Link } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import VisapageModal from './Visapagemodal';
import { updateState } from '../redux/visaStatusSlice';

export default function Selectedtablecomponent({ data }) {
	const { visaData, openModal } = data;
	const [newData, setNewData] = useState([visaData]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedId, setSelectedId] = useState(null);

	const dispatch = useDispatch();

	const { control, handleSubmit } = useForm({
		defaultValues: {
			items: data,
		},
	});
	console.log(visaData, 'this is the data');

	const onSubmit = (formData) => {
		console.log(formData);
		// Handle form submission if needed
	};
	console.log(visaData, 'this is the visa data');
	return (
		<div className='flex flex-col'>
			<div className='overflow-x-auto'>
				<div className='align-middle inline-block min-w-full rounded-md'>
					<div className='shadow overflow-hidden'>
						<form onSubmit={handleSubmit(onSubmit)}>
							<table className='table-fixed min-w-full divide-y divide-gray-200 rounded-md'>
								<thead className='bg-gray-100 rounded-md'>
									<tr>
										<th scope='col' className='p-4'>
											<div className='flex items-center'>
												<input
													id='checkbox-all'
													type='checkbox'
													className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded'
												/>
												<label htmlFor='checkbox-all' className='sr-only'>
													checkbox
												</label>
											</div>
										</th>
										<th
											scope='col'
											className='p-4 text-left text-xs font-large text-gray-900 uppercase'>
											Name
										</th>
										<th
											scope='col'
											className='p-4 text-left text-xs font-large text-gray-900 uppercase'>
											Visa Check
										</th>
										<th
											scope='col'
											className='p-4 text-left text-xs font-large text-gray-900 uppercase'>
											Ready-Flight
										</th>
										<th
											scope='col'
											className='p-4 text-left text-xs font-large text-gray-900 uppercase'>
											Amount Paid
										</th>
										<th
											scope='col'
											className='p-4 text-left text-xs font-large text-gray-900 uppercase'>
											Flight Date and Time
										</th>
										<th
											scope='col'
											className='p-4 text-left text-xs font-large text-gray-900 uppercase'>
											Airline Name
										</th>
										<th
											scope='col'
											className='p-4 text-left text-xs font-large text-gray-900 uppercase'>
											Visa
										</th>
									</tr>
								</thead>

								<tbody className='bg-white divide-y divide-gray-200 rounded-lg'>
									{visaData.map((item, index) => (
										<tr key={item.id} className='hover:bg-gray-100'>
											<td className='p-4 w-4'>
												<div className='flex items-center'>
													<span className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded'>
														{/* {item.visaData} */}
													</span>
												</div>
											</td>
											<td className='p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0'>
												<img
													className='h-10 w-10 rounded-full'
													src={item.avatar}
													alt={`${item.name} avatar`}
												/>
												<div className='text-sm font-normal text-gray-500'>
													<div className='text-base font-semibold text-gray-900'>
														<Link to={`/profile/${item.id}`}>{item.name}</Link>{' '}
													</div>
													<div className='text-sm font-normal text-gray-500'>
														{item.passportNo}
													</div>
												</div>
											</td>
											<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
												<span>{item.shramStatus.orientation}</span>
											</td>
											<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
												<span>{item.readyFlight ? 'Ready' : 'Not Ready'}</span>
											</td>
											<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
												<span>{item.shramStatus.amountPaid}</span>
											</td>
											<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
												<span>{item.shramStatus.flightDate}</span>
											</td>
											<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
												<span>{item.shramStatus.airlinesName}</span>
											</td>
											<td className='p-4 whitespace-nowrap'>
												<button
													type='button'
													onClick={() => {
														dispatch(
															updateState({ type: 'setVisaid', value: item.id })
														);
														openModal();
													}}
													className='w-1/2 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto'>
													<svg
														className='-ml-1 mr-2 h-6 w-6'
														fill='currentColor'
														viewBox='0 0 20 20'
														xmlns='http://www.w3.org/2000/svg'>
														<path
															fillRule='evenodd'
															d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
															clipRule='evenodd'
														/>
													</svg>
													Add User
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
