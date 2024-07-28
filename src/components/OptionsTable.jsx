import React from 'react';
import { Link } from 'react-router-dom';

export default function OptionsTable({ openModal }) {
	return (
		<div>
			<div className='sm:flex'>
				<div className='hidden sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0'>
					<ul className='flex flex-wrap -m-1'>
						<li className='m-1'>
							<button className='inline-flex items-center justify-center text-base font-semibold rounded-full border bg-blue-600 text-white px-4 py-2'>
								<Link
									to='/table' // Update with the actual path
									style={{ textDecoration: 'none', color: 'inherit' }}>
									all
									<span className='ml-2 bg-yellow-500 rounded-full px-2 py-1'>
										126
									</span>
								</Link>
							</button>
						</li>
						<li className='m-1'>
							<button className='inline-flex items-center justify-center text-base font-semibold rounded-full border border-gray-200 bg-red-600 text-white px-4 py-2'>
								Rejected
								<span className='ml-2 bg-red-500 rounded-full px-2 py-1'>
									19
								</span>
							</button>
						</li>
						<li className='m-1'>
							<button className='inline-flex items-center justify-center text-base font-semibold rounded-full border border-gray-200 bg-green-600 text-white px-4 py-2'>
								Selected
								<span className='ml-2 bg-green-500 rounded-full px-2 py-1'>
									14
								</span>
							</button>
						</li>
						<li className='m-1'>
							<button className='inline-flex items-center justify-center text-base font-semibold rounded-full border border-gray-200 bg-yellow-600 text-white px-4 py-2'>
								<Link
									to='/shram' // Update with the actual path
									style={{ textDecoration: 'none', color: 'inherit' }}>
									Sharam{' '}
									<span className='ml-2 bg-yellow-500 rounded-full px-2 py-1'>
										34
									</span>
								</Link>
							</button>
						</li>
					</ul>
				</div>

				<div className='flex items-center space-x-2 sm:space-x-3 ml-auto'>
					<button
						type='button'
						onClick={openModal}
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
					<a
						href='#'
						className='w-1/2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto'>
						<svg
							className='-ml-1 mr-2 h-6 w-6'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z'
								clipRule='evenodd'
							/>
						</svg>
						Export
					</a>
				</div>
			</div>
		</div>
	);
}
