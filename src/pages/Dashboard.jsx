import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';
import DataTable from './DataTable';
import CompanyProfileCard from '../components/CompanyProfileCard';
import CompanyProfileModal from '../components/CompanyProfileModal'; // Import the modal component
import { useLocation } from 'react-router-dom';
import ProfileData from './profileData';
import Componydemand from './Componydemand';
import ShramTable from './ShramTable';

function Dashboard() {
	const location = useLocation();
	let content;
	switch (location.pathname) {
		case '/':
			content = <Componydemand />;
			break;
		case '/table':
			content = <DataTable />;
			break;
		case '/profile':
			content = <ProfileData />;
			break;
		case '/shram':
			content = <ShramTable />;
			break;
		default:
			content = <div> no component </div>;
	}
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const handleSave = (data) => {
		// Handle the data saved from modal
		console.log('Company data saved:', data);
		// Optionally, you could update the state or send data to an API here
	};

	return (
		<div className='flex h-screen overflow-hidden'>
			{/* Sidebar */}
			<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

			{/* Content area */}
			<div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
				{/*  Site header */}
				<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

				<main className='grow'>
					<div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
						{/* Dashboard actions */}

						{/* Cards */}
						<div className='grid'>{content}</div>
					</div>
				</main>

				<Banner />
			</div>

			{/* Company Profile Modal */}
		</div>
	);
}

export default Dashboard;
