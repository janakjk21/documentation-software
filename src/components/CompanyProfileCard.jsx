import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// Ensure these are correctly imported

const CompanyProfileCard = ({ data, handleDelete }) => {
	const {
		category,
		company_code,
		contract_year,
		country,
		demand,
		female,
		id,
		interview_type,
		logo,
		lot_no,
		male,
		max_age,
		min_age,
		name,
		pax,
		remarks,
		salary,
	} = data;
	console.log(id);

	const dispatch = useDispatch();

	const handleUrlIdSave = () => {
		// dispatch(updateState({ type: 'companyUrlId', value: profile.id }));
	};

	return (
		<div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-6 m-4'>
			<div className='flex items-center justify-between mb-4'>
				<h2 className='text-2xl font-bold text-gray-800'>{name}</h2>
				<button
					onClick={() => handleDelete(id)}
					className='text-red-500 hover:text-red-700'>
					Delete
				</button>
			</div>
			<div className='mb-4'>
				{logo && typeof logo === 'object' && (
					<img
						src={URL.createObjectURL(logo)}
						alt='Company Logo'
						className='w-full h-32 object-cover rounded-lg'
					/>
				)}
			</div>
			<div className='space-y-2'>
				<p>
					<strong>Category:</strong> {category}
				</p>
				<p>
					<strong>Company Code:</strong> {company_code}
				</p>
				<p>
					<strong>Contract Year:</strong> {contract_year}
				</p>
				<p>
					<strong>Country:</strong> {country}
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
					<strong>Max Age:</strong> {max_age}
				</p>
				<p>
					<strong>Min Age:</strong> {min_age}
				</p>
				<p>
					<strong>Pax:</strong> {pax}
				</p>
				<p>
					<strong>Remarks:</strong> {remarks}
				</p>
				<p>
					<strong>Salary:</strong> {salary}
				</p>
				<p>
					<strong>Interview Type:</strong> {interview_type}
				</p>
				<button
					onClick={handleUrlIdSave}
					className='text-blue-500 hover:text-blue-700'>
					<Link to={`/table/${id}`}>So details</Link>
				</button>
			</div>
		</div>
	);
};

export default CompanyProfileCard;
