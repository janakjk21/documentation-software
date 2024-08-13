import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
	const { id } = useParams();
	const tableData = useSelector((state) => state.table); // Adjust the path to your table reducer

	if (!tableData || !tableData.data) {
		return <div>Loading...</div>;
	}

	const profileData = tableData.data.find((data) => data.id === id);
	console.log(profileData, 'this is profile ');

	if (!profileData) {
		return <div>Loading...</div>;
	}

	const {
		avatar,
		certificate,
		medical,
		name,
		originalPassport,
		passportNo,
		photo,
		policeReport,
		video,
		dateOfBirth,
		dateOfPassportExpire,
		age,
		nomineeName,
		contactNo,
		height,
		education,
		workExperience,
	} = profileData;

	return (
		<div className='container mx-auto p-4'>
			<div className='bg-white shadow-md rounded-lg p-6'>
				<div className='flex flex-col items-center'>
					<img
						src={avatar} // Assuming photo is an object with a URL property
						alt='Profile'
						className='w-32 h-32 rounded-full border-2 border-gray-300'
					/>
					<h1 className='text-2xl font-bold mt-4'>{name}</h1>
					<p className='text-gray-600'>{passportNo}</p>
				</div>

				<div className='mt-6'>
					<h2 className='text-xl font-bold border-b-2 border-gray-300 pb-2'>
						Personal Information
					</h2>
					<div className='mt-4'>
						<p>
							<span className='font-bold'>Date of Birth:</span> {dateOfBirth}
						</p>
						<p>
							<span className='font-bold'>Age:</span> {age}
						</p>
						<p>
							<span className='font-bold'>Contact No:</span> {contactNo}
						</p>
						<p>
							<span className='font-bold'>Height:</span> {height}
						</p>
						<p>
							<span className='font-bold'>Nominee Name:</span> {nomineeName}
						</p>
					</div>
				</div>

				<div className='mt-6'>
					<h2 className='text-xl font-bold border-b-2 border-gray-300 pb-2'>
						Education
					</h2>
					<div className='mt-4'>
						<p>{education}</p>
					</div>
				</div>

				<div className='mt-6'>
					<h2 className='text-xl font-bold border-b-2 border-gray-300 pb-2'>
						Work Experience
					</h2>
					<div className='mt-4'>
						<p>{workExperience}</p>
					</div>
				</div>

				<div className='mt-6'>
					<h2 className='text-xl font-bold border-b-2 border-gray-300 pb-2'>
						Documents
					</h2>
					<div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div>
							<p className='font-bold'>Certificate:</p>
							<img
								src={certificate}
								alt='Certificate'
								className='w-full h-auto border-2 border-gray-300'
							/>
						</div>
						<div>
							<p className='font-bold'>Medical:</p>
							<img
								src={medical}
								alt='Medical'
								className='w-full h-auto border-2 border-gray-300'
							/>
						</div>
						<div>
							<p className='font-bold'>Original Passport:</p>
							<img
								src={originalPassport}
								alt='Original Passport'
								className='w-full h-auto border-2 border-gray-300'
							/>
						</div>
						<div>
							<p className='font-bold'>Police Report:</p>
							<img
								src={policeReport}
								alt='Police Report'
								className='w-full h-auto border-2 border-gray-300'
							/>
						</div>
						<div>
							<p className='font-bold'>Video:</p>
							<video
								controls
								className='w-full h-auto border-2 border-gray-300'>
								<source src={video} type='video/mp4' />
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
