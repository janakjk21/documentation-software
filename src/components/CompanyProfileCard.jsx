import React from 'react';
import { Link } from 'react-router-dom';
import EditMenu from '../components/DropdownEditMenu';

// Example data
const companyData = {
	name: 'Acme Inc.',
	logo: 'https://via.placeholder.com/100', // Example logo URL
	details: {
		address: '123 Business Rd, Business City, BC 12345',
		contact: '+1 (555) 123-4567',
		email: 'contact@acmeinc.com',
	},
};

function CompanyProfileCard() {
	const { name, logo, details } = companyData;

	return (
		<div className='flex bg-white c2vpa ci500 c18r2 coz6m c1hly c5vqk cetff'>
			<div className='flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl'>
				<div className='px-5 pt-5 pb-8'>
					<header className='flex justify-between items-start mb-4'>
						<h1 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
							{name}
						</h1>
						{/* Menu button */}
						<EditMenu align='right' className='relative inline-flex'>
							<li>
								<Link
									className='font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3'
									to='#0'>
									Edit
								</Link>
							</li>
							<li>
								<Link
									className='font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3'
									to='#0'>
									Remove
								</Link>
							</li>
						</EditMenu>
					</header>

					{/* Company Logo */}
					<div className='flex justify-center mb-4'>
						<img
							src={logo}
							alt={`${name} Logo`}
							className='w-32 h-32 object-cover rounded-full border-2 border-gray-300'
						/>
					</div>

					{/* Company Details */}
					<div className='text-gray-800 dark:text-gray-100'>
						<div className='text-lg font-semibold mb-2'>Details</div>
						<div className='text-sm'>
							<div className='font-medium'>Address:</div>
							<p className='text-gray-600 dark:text-gray-400'>
								{details.address}
							</p>
						</div>
						<div className='mt-2'>
							<div className='font-medium'>Contact:</div>
							<p className='text-gray-600 dark:text-gray-400'>
								{details.contact}
							</p>
						</div>
						<div className='mt-2'>
							<div className='font-medium'>Email:</div>
							<p className='text-gray-600 dark:text-gray-400'>
								{details.email}
							</p>
						</div>
					</div>
				</div>

				{/* Redirect Button */}
				<div className='px-5 pb-5'>
					<Link
						to='/table' // Update with the actual path
						className='block w-full bg-blue-600 text-white text-center py-2 rounded-full hover:bg-blue-700 transition duration-300'>
						View More Details
					</Link>
				</div>
			</div>
		</div>
	);
}

export default CompanyProfileCard;
