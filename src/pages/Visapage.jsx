import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OptionsTable from '../components/OptionsTable';
import VisatableComponent from '../components/VisatableComponent';
import VisaModal from '../components/Visapagemodal';

function Visapage() {
	const tableData = useSelector((state) => state.table); // Adjust the path to your table reducer
	const companyUrlId = useSelector((state) => state.visaStatus.companyUrlId);
	console.log(companyUrlId);
	// Filter the checkeddata array to include only items with status 'Apply for Visa'
	const visaData = tableData.data.filter(
		(item) =>
			item.visaStatus === 'Apply for Visa' && item.companyId === companyUrlId
	);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedId, setSelectedId] = useState(null);

	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setSelectedId(null);
		setIsModalOpen(false);
	};
	return (
		<div className='p-4'>
			<OptionsTable openModal={openModal} />
			<hr className='border-t border-gray-300 my-4' />
			<VisatableComponent data={{ visaData, openModal }} />
			<VisaModal isOpen={isModalOpen} onClose={closeModal} id={selectedId} />
		</div>
	);
}

export default Visapage;
