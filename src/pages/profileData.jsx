// ProfilePage.js

import React from 'react';

const profileData = {
	name: 'John Doe',
	photo: 'https://i.pravatar.cc/150?img=3', // Example photo URL
	address: '123 Main St, Springfield, USA',
	passportScan: 'https://example.com/passport.jpg', // Example passport scan URL
	dateOfBirth: '1990-01-01',
	agent: 'Agent Smith',
	documents: {
		medical: 'https://example.com/medical.jpg', // Example medical document URL
		originalPassport: 'https://example.com/original-passport.jpg',
		policeReport: 'https://example.com/police-report.jpg',
		certificate: 'https://example.com/certificate.jpg',
	},
};

function ProfilePage() {
	const { name, photo, address, passportScan, dateOfBirth, agent, documents } =
		profileData;

	return (
		<div className='container mx-auto p-4'>
			<div className='bg-white shadow-md rounded-lg p-6'>
				{/* Profile Header */}
				<div className='text-center'>
					<img
						src={photo}
						alt='Profile'
						className='w-32 h-32 rounded-full border-2 border-gray-300 mx-auto'
					/>
					<h1 className='text-2xl font-bold mt-4'>{name}</h1>
					<p className='text-lg text-gray-700 mt-2'>{passportScan}</p>
					<p className='text-gray-600 mt-2'>{address}</p>
					<p className='text-gray-600 mt-2'>Date of Birth: {dateOfBirth}</p>
				</div>

				{/* Agent Info */}
				<div className='text-center mt-6'>
					<h2 className='text-xl font-semibold text-blue-600'>Agent</h2>
					<p className='text-blue-600'>{agent}</p>
				</div>

				{/* Passport Scan */}
				<div className='mt-6'>
					<h2 className='text-xl font-semibold mb-2'>Passport Scan</h2>
					<img
						src={passportScan}
						alt='Passport Scan'
						className='w-full h-auto border-2 border-gray-300'
					/>
				</div>

				{/* Documents */}
				<div className='mt-6'>
					<h2 className='text-xl font-semibold mb-2'>Documents</h2>
					<div className='space-y-4'>
						<div>
							<h3 className='text-lg font-semibold'>Medical Document</h3>
							<img
								src={documents.medical}
								alt='Medical Document'
								className='w-full h-auto border-2 border-gray-300'
							/>
						</div>
						<div>
							<h3 className='text-lg font-semibold'>Original Passport</h3>
							<img
								src={documents.originalPassport}
								alt='Original Passport'
								className='w-full h-auto border-2 border-gray-300'
							/>
						</div>
						<div>
							<h3 className='text-lg font-semibold'>Police Report</h3>
							<img
								src={documents.policeReport}
								alt='Police Report'
								className='w-full h-auto border-2 border-gray-300'
							/>
						</div>
						<div>
							<h3 className='text-lg font-semibold'>Certificate</h3>
							<img
								src={documents.certificate}
								alt='Certificate'
								className='w-full h-auto border-2 border-gray-300'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
