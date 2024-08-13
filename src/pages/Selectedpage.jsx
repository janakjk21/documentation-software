import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OptionsTable from '../components/OptionsTable';
import Selectedtablecomponent from '../components/Selectedtablecomponent';

function Selectedpage() {
	const tableData = useSelector((state) => state.table); // Adjust the path to your table reducer
	const companyUrlId = useSelector((state) => state.visaStatus.companyUrlId); // Adjust the path to your company reducer

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	// Filter the checkeddata array to include only items with status 'selected'
	const selectedData = tableData.checkeddata.filter(
		(item) => item.status === 'Selected' && item.companyId === companyUrlId
	);
	console.log('selectedData', selectedData);

	return (
		<div className='p-4'>
			<OptionsTable openModal={openModal} />
			<hr className='border-t border-gray-300 my-4' />
			<Selectedtablecomponent data={selectedData} />
		</div>
	);
}

export default Selectedpage;
