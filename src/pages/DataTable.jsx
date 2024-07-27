// DataTable.js

import React, { useState } from 'react';
import {
	FaCheck,
	FaTimes,
	FaCamera,
	FaVideo,
	FaFileAlt,
	FaFile,
	FaGlobe,
	FaPlus,
	FaPencilAlt,
	FaTrash,
} from 'react-icons/fa';
import Tablecomponent from '../components/Tablecomponent';

const initialData = [
	{
		passportNo: 'A1234567',
		name: 'John Doe',
		avatar: 'https://i.pravatar.cc/40?img=1', // Example avatar URL
		medical: false,
		originalPassport: false,
		policeReport: false,
		photo: false,
		video: false,
		certificate: false,
	},
	// Add more rows as needed
];

function DataTable() {
	const [data, setData] = useState(initialData);

	const handleCheckboxChange = (index, field) => {
		const updatedData = [...data];
		updatedData[index][field] = !updatedData[index][field];
		setData(updatedData);
	};

	const handleCreate = () => {
		// Logic for creating a new row
		console.log('Create new entry');
	};

	const handleUpdate = (index) => {
		// Logic for updating a row
		console.log(`Update entry at row ${index}`);
	};

	const handleDelete = (index) => {
		// Logic for deleting a row
		const updatedData = data.filter((_, i) => i !== index);
		setData(updatedData);
		console.log(`Deleted entry at row ${index}`);
	};

	return (
		<div className='p-4'>
			{/* <table className='w-full bg-white shadow-md rounded-lg'>
				<thead className='text-gray-500 bg-gray-100'>
					<tr>
						<th className='px-2 py-3'>Passport No</th>
						<th className='px-2 py-3'>Name</th>
						<th className='px-2 py-3'>
							<FaGlobe className='w-5 h-5 text-gray-500' aria-hidden='true' />
						</th>
						<th className='px-2 py-3'>
							<FaFile className='w-5 h-5 text-gray-500' aria-hidden='true' />
						</th>
						<th className='px-2 py-3'>
							<FaFileAlt className='w-5 h-5 text-gray-500' aria-hidden='true' />
						</th>
						<th className='px-2 py-3'>
							<FaCamera className='w-5 h-5 text-gray-500' aria-hidden='true' />
						</th>
						<th className='px-2 py-3'>
							<FaVideo className='w-5 h-5 text-gray-500' aria-hidden='true' />
						</th>
						<th className='px-2 py-3'>
							<FaCheck className='w-5 h-5 text-gray-500' aria-hidden='true' />
						</th>
						<th className='px-2 py-3'>Actions</th>
					</tr>
				</thead>
				<tbody className='bg-white divide-y divide-gray-200'>
					{data.map((row, index) => (
						<tr key={index}>
							<td className='px-2 py-2 flex items-center'>
								<img
									src={row.avatar}
									alt='Avatar'
									className='w-10 h-10 rounded-full mr-2'
								/>
								{row.passportNo}
							</td>
							<td className='px-2 py-2'>{row.name}</td>
							<td className='px-2 py-2'>
								<input
									type='checkbox'
									checked={row.medical}
									onChange={() => handleCheckboxChange(index, 'medical')}
									className='form-checkbox'
								/>
							</td>
							<td className='px-2 py-2'>
								<input
									type='checkbox'
									checked={row.originalPassport}
									onChange={() =>
										handleCheckboxChange(index, 'originalPassport')
									}
									className='form-checkbox'
								/>
							</td>
							<td className='px-2 py-2'>
								<input
									type='checkbox'
									checked={row.policeReport}
									onChange={() => handleCheckboxChange(index, 'policeReport')}
									className='form-checkbox'
								/>
							</td>
							<td className='px-2 py-2'>
								<input
									type='checkbox'
									checked={row.photo}
									onChange={() => handleCheckboxChange(index, 'photo')}
									className='form-checkbox'
								/>
							</td>
							<td className='px-2 py-2'>
								<input
									type='checkbox'
									checked={row.video}
									onChange={() => handleCheckboxChange(index, 'video')}
									className='form-checkbox'
								/>
							</td>
							<td className='px-2 py-2'>
								<input
									type='checkbox'
									checked={row.certificate}
									onChange={() => handleCheckboxChange(index, 'certificate')}
									className='form-checkbox'
								/>
							</td>
							<td className='px-2 py-2 flex space-x-2'>
								<button
									className='bg-green-600 text-white px-2 py-1 rounded-full hover:bg-green-700 transition duration-300'
									onClick={handleCreate}>
									<FaPlus className='w-3 h-2 inline-block' aria-hidden='true' />
								</button>
								<button
									className='bg-blue-600 text-white px-2 py-1 rounded-full hover:bg-blue-700 transition duration-300'
									onClick={() => handleUpdate(index)}>
									<FaPencilAlt
										className='w-3 h-2 inline-block'
										aria-hidden='true'
									/>
								</button>
								<button
									className='bg-red-600 text-white px-2 py-1 rounded-full hover:bg-red-700 transition duration-300'
									onClick={() => handleDelete(index)}>
									<FaTrash
										className='w-3 h-2 inline-block'
										aria-hidden='true'
									/>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table> */}
			{<Tablecomponent data={initialData} />}
		</div>
	);
}

export default DataTable;
