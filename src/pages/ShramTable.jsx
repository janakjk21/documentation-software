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
import ShramRelated from '../components/ShramRelated';
import ShramModal from '../components/Shrammodal';
import { Link } from 'react-router-dom';
import OptionsTable from '../components/OptionsTable';

const initialShramData = [
	{
		id: 1,
		name: 'John Doe',
		readyToShram: false,
		shramApplied: false,
		shramReceived: 'https://i.pravatar.cc/40?img=1', // Example URL for received image
		readyToFlight: false,
		ticketConfirmed: 'https://i.pravatar.cc/40?img=2', // Example URL for ticket image
		flightCompleted: false,
	},
	// Add more rows as needed
];

function ShramTable() {
	const [data, setData] = useState(initialShramData);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleCheckboxChange = (index, field) => {
		const updatedData = [...data];
		updatedData[index][field] = !updatedData[index][field];
		setData(updatedData);
	};

	const handleCreate = () => {
		console.log('Create new entry');
	};

	const handleUpdate = (index) => {
		console.log(`Update entry at row ${index}`);
	};

	const handleDelete = (index) => {
		const updatedData = data.filter((_, i) => i !== index);
		setData(updatedData);
		console.log(`Deleted entry at row ${index}`);
	};

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<div className='p-4'>
			<OptionsTable openModal={openModal} />
			<hr className='border-t border-gray-300 my-4' />
			{<ShramRelated data={data} />}

			<ShramModal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	);
}

export default ShramTable;
