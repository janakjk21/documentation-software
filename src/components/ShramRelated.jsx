import React from 'react';

const Tablecomponent = ({ data }) => {
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
									<th className='px-2 py-3'>Ready to Shram</th>
									<th className='px-2 py-3'>Shram Applied</th>
									<th className='px-2 py-3'>Shram Received</th>
									<th className='px-2 py-3'>Ready to Flight</th>
									<th className='px-2 py-3'>Ticket Confirmed</th>
									<th className='px-2 py-3'>Flight Completed</th>
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
												checked={item.readyToShram}
												className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded'
												readOnly
											/>
										</td>
										<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
											<input
												type='checkbox'
												checked={item.shramApplied}
												className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded'
												readOnly
											/>
										</td>
										<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
											<input
												type='checkbox'
												checked={item.shramReceived}
												className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded'
												readOnly
											/>
										</td>
										<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
											<input
												type='checkbox'
												checked={item.readyToFlight}
												className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded'
												readOnly
											/>
										</td>
										<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
											<input
												type='checkbox'
												checked={item.ticketConfirmed}
												className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded'
												readOnly
											/>
										</td>
										<td className='p-4 whitespace-nowrap text-base font-medium text-gray-900'>
											<input
												type='checkbox'
												checked={item.flightCompleted}
												className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded'
												readOnly
											/>
										</td>
										<td className='p-4 whitespace-nowrap space-x-2'>
											<button
												type='button'
												className='text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center'>
												Edit user
											</button>
											<button
												type='button'
												className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center'>
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
