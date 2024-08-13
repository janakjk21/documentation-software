import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OptionsTable from '../components/OptionsTable';
import Tablecomponent from '../components/Tablecomponent';

function Rejectedpage() {
	const tableData = useSelector((state) => state.table); // Adjust the path to your table reducer

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	// Filter the checkeddata array to include only items with status 'Rejected'
	const rejectedData = tableData.checkeddata.filter(
		(item) => item.status === 'Rejected'
	);
	console.log('rejectedData', rejectedData);

	return (
		<div className='p-4'>
			<OptionsTable openModal={openModal} />
			<hr className='border-t border-gray-300 my-4' />
			<Tablecomponent data={rejectedData} />
		</div>
	);
}

export default Rejectedpage;
