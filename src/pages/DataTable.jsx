// DataTable.js

import React, { useEffect, useState } from 'react';
import Tablecomponent from '../components/Tablecomponent';
import { Link, useParams } from 'react-router-dom';
import OptionsTable from '../components/OptionsTable';
import { useDispatch, useSelector } from 'react-redux';
import { saveCompanyUrlId } from '../redux/companyProfileSlice';
import { useGetDemandQuery } from '../redux/apitabledata';
import ModalInitialUser from '../components/Modalintialuser';

function DataTable({ id }) {
	console.log('id', id);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	// Fetch demand data using the hook
	const {
		data: demandData,
		error: demandError,
		isLoading: demandLoading,
	} = useGetDemandQuery({ demandId: id, userDemandId: id });

	if (demandLoading) return <div>Loading...</div>;
	if (demandError) return <div>Error: {demandError.message}</div>;
	if (demandData) console.log('data this is inside the data ', demandData);

	// Assuming demandData contains the data you need to display in the table

	return (
		<div className='p-4'>
			<OptionsTable openModal={openModal} companyId={id} />
			<hr className='border-t border-gray-300 my-4' />
			<Tablecomponent data={demandData} openModal={openModal} />
			<ModalInitialUser
				isModalOpen={isModalOpen}
				closeModal={closeModal}
				companyId={id}
			/>
		</div>
	);
}

export default DataTable;
