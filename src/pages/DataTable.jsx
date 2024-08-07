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
import ModalInitialUser from '../components/Modalintialuser';
import { Link } from 'react-router-dom';
import OptionsTable from '../components/OptionsTable';

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
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<div className='p-4'>
			<OptionsTable openModal={openModal} />
			<hr className='border-t border-gray-300 my-4' />
			{<Tablecomponent data={initialData} />}

			<ModalInitialUser isOpen={isModalOpen} onClose={closeModal} />
		</div>
	);
}

export default DataTable;
