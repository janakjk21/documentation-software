import React, { useEffect, useState } from 'react';
import CompanyProfileCard from '../components/CompanyProfileCard';
import CompanyProfileModal from '../components/CompanyProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export default function Componydemand({ id }) {
	const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
	const companyProfiles = useSelector((state) => state.companyProfile); // Example selector for company profiles
	const [demandData, setDemandData] = useState([]);
	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	const handleSave = (data) => {
		// Handle the data saved from modal
		console.log('Company data saved:', data);
		// Optionally, you could update the state or send data to an API here
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://127.0.0.1:8000/demand/');
				const data = response.data;
				// Process the data as needed
				console.log('Data:', data);
				setDemandData(data);
			} catch (error) {
				console.error('Error:', error);
			}
		};

		fetchData();
	}, []);
	const handleDelete = (id) => {
		axios
			.delete(`http://127.0.0.1:8000/demand/`, { data: { id } })
			.then((response) => {
				// Handle success
				console.log(response);
				toast.success('Data deleted successfully');
				setDemandData(demandData.filter((data) => data.id !== id));
				// dispatch(deleteProfile(id));
				// Rerender the component or update the state to reflect the deletion
				// For example, you can dispatch an action to update the state in Redux
			})
			.catch((error) => {
				// Handle error
				toast.error('Error deleting data');
				console.log(error);
			});
	};

	return (
		<div className='p-4'>
			<div className='sm:flex'>
				<div className='hidden sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0'>
					<div className='flex space-x-1 pl-0 sm:pl-2 mt-3 sm:mt-0'></div>
				</div>
				<div className='flex items-center space-x-2 sm:space-x-3 ml-auto'>
					<button
						type='button'
						data-modal-toggle='add-user-modal'
						onClick={handleOpenModal}
						className='w-1/2 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto'>
						<svg
							className='-ml-1 mr-2 h-6 w-6'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
								clipRule='evenodd'
							/>
						</svg>
						Add Demand
					</button>
					<a
						href='#'
						className='w-1/2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto'>
						<svg
							className='-ml-1 mr-2 h-6 w-6'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z'
								clipRule='evenodd'
							/>
						</svg>
						Export
					</a>
				</div>
			</div>
			<div className='container mx-auto p-4'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{demandData.length === 0 ? (
						<div className='flex items-center justify-center h-64'>
							{/* Add your loading animation here */}
							<p>Loading...</p>
						</div>
					) : (
						demandData.map((data) => (
							<CompanyProfileCard
								data={data}
								key={data.id}
								id={id}
								handleDelete={handleDelete}
							/>
						))
					)}
				</div>
			</div>
			<CompanyProfileModal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onSave={handleSave}
				id={id}
				demand={setDemandData}
			/>
			<ToastContainer
				position='bottom-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
				transition:Bounce
			/>{' '}
		</div>
	);
}
