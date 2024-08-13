import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import DataTable from './DataTable';
import ProfileData from './profileData';
import Componydemand from './Componydemand';
import ShramTable from './ShramTable';
import Selectedpage from './Selectedpage';
import Rejectedpage from './Rejectedpage';
import Visapage from './Visapage';
import Staffpage from './Staffpage';
import Prepremmision from './Prepremission';

function Dashboard() {
	const location = useLocation();
	const [sidebarOpen, setSidebarOpen] = useState(false);

	// Determine the content to display based on the current path
	const getContent = (path) => {
		const { id } = useParams();
		switch (path) {
			case `/country/${id}`:
				return <Componydemand id={id} />;
			case `/table/${id}`:
				return <DataTable id={id} />;
			case '/shram':
				return <ShramTable />;
			case '/selected':
				return <Selectedpage />;
			case '/rejected':
				return <Rejectedpage />;
			case '/visa':
				return <Visapage />;
			case '/staff':
				return <Staffpage />;
			case '/premission':
				return <Prepremmision />;

			default:
				if (path.startsWith(`/profile/`)) {
					return <ProfileData id={id} />;
				}
				return <div>No component</div>;
		}
	};

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
				{/* Header */}
				{/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

				<main>
					<div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
						{/* Banner */}
						<Banner />

						{/* Main content */}
						{getContent(location.pathname)}
					</div>
				</main>
			</div>
		</div>
	);
}

export default Dashboard;
