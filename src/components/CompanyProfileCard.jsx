import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProfile } from '../redux/companyProfileSlice';
import { Link } from 'react-router-dom';
import { updateState } from '../redux/visaStatusSlice';

function CompanyProfileCard({ profile }) {
	const {
		companyCode,
		LTNo,
		ageMax,
		ageMin,
		categories,
		contractYear,
		country,
		countryId,
		demand,
		female,
		id,
		interviewType,
		logo,
		male,
		name,
		pax,
		remarks,
		salary,
	} = profile;
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteProfile(profile.id));
	};

	const handleUrlIdSave = () => {
		dispatch(updateState({ type: 'companyUrlId', value: profile.id }));
	};

	return (
		<div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-6 m-4'>
			<div className='flex items-center justify-between mb-4'>
				<h2 className='text-2xl font-bold text-gray-800'>{name}</h2>
			</div>
			<div className='mb-4'>
				{logo && logo.length > 0 && (
					<img
						src={URL.createObjectURL(logo[0])}
						alt='Company Logo'
						className='w-full h-32 object-cover rounded-lg'
					/>
				)}
			</div>
			<div className='space-y-2'>
				<p>
					<strong>Company Code:</strong> {companyCode}
				</p>
				<p>
					<strong>LT No:</strong> {LTNo}
				</p>
				<p>
					<strong>Age Range:</strong> {ageMin} - {ageMax}
				</p>
				<p>
					<strong>Categories:</strong> {categories}
				</p>
				<p>
					<strong>Contract Year:</strong> {contractYear}
				</p>
				<p>
					<strong>Country:</strong> {country} ({countryId})
				</p>
				<p>
					<strong>Demand:</strong> {demand}
				</p>
				<p>
					<strong>Female:</strong> {female}
				</p>
				<p>
					<strong>Male:</strong> {male}
				</p>
				<p>
					<strong>Pax:</strong> {pax}
				</p>
				<p>
					<strong>Interview Type:</strong> {interviewType}
				</p>
				<p>
					<strong>Remarks:</strong> {remarks}
				</p>
				<p>
					<strong>Salary:</strong> {salary}
				</p>
			</div>
			<div className='mt-4 flex justify-between'>
				<Link
					to={`/table/${id}`}
					onClick={handleUrlIdSave}
					className='text-blue-500 hover:text-blue-700'>
					View Details
				</Link>
				<button
					onClick={handleDelete}
					className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700'>
					Delete
				</button>
			</div>
		</div>
	);
}

export default CompanyProfileCard;
