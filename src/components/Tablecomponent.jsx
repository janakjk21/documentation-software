import React from 'react';

const Tablecomponent = ({ data, onStatusChange }) => {
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
									<tr key={index} className='hover:bg-gray-100'>
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
													{item.name}
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
												value={item.status}
												onChange={(e) => onStatusChange(index, e.target.value)}
												className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5'>
												<option value='Pending'>Pending</option>
												<option value='Approved'>Approved</option>
												<option value='Rejected'>Rejected</option>
												<option value='Refunded'>Refunded</option>
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
};

export default Tablecomponent;
