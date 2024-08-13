// DataTable.js

import React, { useEffect, useState } from 'react';
import Tablecomponent from '../components/Tablecomponent';
import ModalInitialUser from '../components/Modalintialuser';
import { Link, useParams } from 'react-router-dom';
import OptionsTable from '../components/OptionsTable';
import { useDispatch, useSelector } from 'react-redux';
import { saveCompanyUrlId } from '../redux/companyProfileSlice';

function DataTable({ id }) {
	const { companyId } = useParams();
	const tableData = useSelector((state) => state.table); // Adjust the path to your table reducer
	const dispatch = useDispatch();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	const filteredData = tableData.checkeddata.filter(
		(item) => item.companyId === id
	);

	return (
		<div className='p-4'>
			<OptionsTable openModal={openModal} companyId={companyId} />
			<hr className='border-t border-gray-300 my-4' />
			{<Tablecomponent data={filteredData} openModal={openModal} />}
			<ModalInitialUser isOpen={isModalOpen} onClose={closeModal} />
		</div>
	);
}

export default DataTable;
