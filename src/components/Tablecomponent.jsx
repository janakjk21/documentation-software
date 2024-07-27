import React from 'react';
import {
	FaGlobe,
	FaFile,
	FaFileAlt,
	FaCamera,
	FaVideo,
	FaCheck,
} from 'react-icons/fa';

const Tablecomponent = ({ data }) => {
	return (
		<div className='flex flex-col'>
			<div className='overflow-x-auto'>
				<div className='align-middle inline-block min-w-full'>
					<div className='shadow overflow-hidden'>
						<table className='table-fixed min-w-full divide-y divide-gray-200'>
							<thead className='bg-gray-100'>
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
										className='p-4 text-left text-xs font-medium text-gray-500 uppercase'>
										Name
									</th>
									<th className='px-2 py-3'>
										<FaGlobe
											className='w-5 h-5 text-gray-500'
											aria-hidden='true'
										/>
									</th>
									<th className='px-2 py-3'>
										<FaFile
											className='w-5 h-5 text-gray-500'
											aria-hidden='true'
										/>
									</th>
									<th className='px-2 py-3'>
										<FaFileAlt
											className='w-5 h-5 text-gray-500'
											aria-hidden='true'
										/>
									</th>
									<th className='px-2 py-3'>
										<FaCamera
											className='w-5 h-5 text-gray-500'
											aria-hidden='true'
										/>
									</th>
									<th className='px-2 py-3'>
										<FaVideo
											className='w-5 h-5 text-gray-500'
											aria-hidden='true'
										/>
									</th>
									<th className='px-2 py-3'>
										<FaCheck
											className='w-5 h-5 text-gray-500'
											aria-hidden='true'
										/>
									</th>
									<th className='px-2 py-3'>Actions</th>
								</tr>
							</thead>
							<tbody className='bg-white divide-y divide-gray-200'>
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
