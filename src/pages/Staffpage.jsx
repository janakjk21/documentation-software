import React, { useState } from 'react';
import StaffFormModal from '../components/staffmodal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStaff } from '../redux/staff';
const StaffPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const staffList = useSelector((state) => state.staffdetails.staffList);
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteStaff(id));
	};

	const handleAddStaff = (staff) => {
		setStaffList([...staffList, { ...staff, id: staffList.length + 1 }]);
	};
	return (
		<div className='p-4'>
			<button
				onClick={() => setIsModalOpen(true)}
				className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4'>
				Add Staff
			</button>
			<div className='flex flex-wrap -mx-2'>
				{staffList.map((staff) => (
					<div key={staff.id} className='w-full sm:w-1/2 md:w-1/3 px-2 mb-4'>
						<StaffCard
							name={staff.name}
							avatar={staff.avatar}
							email={staff.email}
							passport={staff.passport}
							onDelete={() => handleDelete(staff.id)}
						/>
					</div>
				))}
			</div>
			<StaffFormModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSubmit={handleAddStaff}
			/>
			{/* Add more StaffCard components as needed */}
		</div>
	);
};

export default StaffPage;
const StaffCard = ({ name, avatar, email, passport, onDelete }) => {
	return (
		<div className='max-w-sm rounded overflow-hidden shadow-lg bg-white p-4'>
			<div className='flex items-center mb-4'>
				<img
					className='w-12 h-12 rounded-full mr-4'
					src={avatar}
					alt={`${name}'s avatar`}
				/>
				<div className='text-xl font-bold'>{name}</div>
			</div>
			<div className='mb-2'>
				<span className='font-semibold'>Email: </span>
				{email}
			</div>
			<div className='mb-4'>
				<span className='font-semibold'>Passport: </span>
				{passport}
			</div>
			<button
				onClick={onDelete}
				className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
				Delete
			</button>
		</div>
	);
};
