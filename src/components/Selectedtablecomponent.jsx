import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	updateUserStatus,
	deleteAllUserData,
	updateVisaStatus,
} from '../redux/tableSlice';
import { Link } from 'react-router-dom';

export default function Selectedtablecomponent({ data }) {
	const [newData, setNewData] = useState([data]);
	const [formData, setFormData] = useState({});
	const [slicer, setSlicer] = useState([]);
	const dispatch = useDispatch();
	const handleDeleteAll = () => {
		dispatch(deleteAllUserData());
	};

	const handleVisaStatusChange = (index, value, id) => {
		// Update the form data

		dispatch(updateVisaStatus({ id: id, visaStatus: value }));
	};

	return (
		<div className='flex flex-col'>
			<div className='overflow-x-auto'>
				<div className='align-middle inline-block min-w-full rounded-md'>
					<div className='shadow overflow-hidden'>
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
										Medical
									</th>
									<th
										scope='col'
										className='p-4 text-left text-xs font-large text-gray-900 uppercase'>
										Original Passport
									</th>
									<th
										scope='col'
										className='p-4 text-left text-xs font-large text-gray-900 uppercase'>
										Police Report
									</th>
									<th
										scope='col'
										className='p-4 text-left text-xs font-large text-gray-900 uppercase'>
										Photo
									</th>
									<th
										scope='col'
										className='p-4 text-left text-xs font-large text-gray-900 uppercase'>
										Video
									</th>
									<th
										scope='col'
										className='p-4 text-left text-xs font-large text-gray-900 uppercase'>
										Certificate
									</th>
									<th
										scope='col'
										className='p-4 text-left text-xs font-large text-gray-900 uppercase'>
										Status
									</th>
									<th
										scope='col'
										className='p-4 text-left text-xs font-large text-gray-900 uppercase'>
										Actions
									</th>
								</tr>
							</thead>

							<tbody className='bg-white divide-y divide-gray-200 rounded-lg'>
								{data.map((item, index) => (
									<tr key={item.id} className='hover:bg-gray-100'>
										<td className='p-4 w-4'>
											<div className='flex items-center'>
												<input
													type='checkbox'
													className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded'
												/>
												<label
													htmlFor={`checkbox-${index}`}
													className='sr-only'>
													checkbox
												</label>
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
											<input
												type='checkbox'
												checked={item.medical}
												className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded'
												readOnly
											/>
										</td>
										<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
											<input
												type='checkbox'
												checked={item.originalPassport}
												className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded'
												readOnly
											/>
										</td>
										<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
											<input
												type='checkbox'
												checked={item.policeReport}
												className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded'
												readOnly
											/>
										</td>
										<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
											<input
												type='checkbox'
												checked={item.photo}
												className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded'
												readOnly
											/>
										</td>
										<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
											<input
												type='checkbox'
												checked={item.video}
												className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded'
												readOnly
											/>
										</td>
										<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
											<input
												type='checkbox'
												checked={item.certificate}
												className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded'
												readOnly
											/>
										</td>
										<td className='p-4 whitespace-nowrap'>
											<select
												value={item.visaStatus}
												onChange={(e) =>
													handleVisaStatusChange(index, e.target.value, item.id)
												}
												className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 ${
													item.status === 'Apply for Visa'
														? 'bg-green-200'
														: item.status === 'Do Not Apply for Visa'
														? 'bg-yellow-200'
														: 'bg-blue-200'
												}`}>
												<option value='Pending'>Pending</option>
												<option value='Apply for Visa'>Apply for Visa</option>
												<option value='Do Not Apply for Visa'>
													Do Not Apply for Visa
												</option>
											</select>
										</td>
										<td className='p-4 whitespace-nowrap space-x-2'>
											<button
												type='button'
												className='text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center'>
												<svg
													className='mr-2 h-5 w-5'
													fill='currentColor'
													viewBox='0 0 20 20'
													xmlns='http://www.w3.org/2000/svg'>
													<path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
													<path
														fillRule='evenodd'
														d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
														clipRule='evenodd'
													/>
												</svg>
												Edit user
											</button>
											<button
												type='button'
												onClick={() => dispatch(deleteAllUserData())}
												// onClick={handleDeleteAll()}
												className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center'>
												<svg
													className='mr-2 h-5 w-5'
													fill='currentColor'
													viewBox='0 0 20 20'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														fillRule='evenodd'
														d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
														clipRule='evenodd'
													/>
												</svg>
												Delete user
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
