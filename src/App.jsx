import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';
import store from './redux/store';
import { useSelector } from 'react-redux';
// Import pages
import Dashboard from './pages/Dashboard';
import Initailform from './pages/Initailform';
import DataTable from './pages/DataTable';
import Selectedpage from './pages/Selectedpage';
import ProfilePage from './pages/profileData';
import Login from './pages/Login';
import Staffpage from './pages/Staffpage';
function App() {
	const location = useLocation();

	useEffect(() => {
		document.querySelector('html').style.scrollBehavior = 'auto';
		window.scroll({ top: 0 });
		document.querySelector('html').style.scrollBehavior = '';
	}, [location.pathname]); // triggered on route change

	// console.log('storeState', storeState);
	return (
		<>
			<Routes>
				<Route exact path='/form' element={<Dashboard />} />
				<Route exact path='/table/:id' element={<Dashboard />} />
				<Route exact path='/profile/:id' element={<Dashboard />} />
				<Route exact path='/shram' element={<Dashboard />} />
				<Route exact path='/Selected' element={<Dashboard />} />
				<Route exact path='/Rejected' element={<Dashboard />} />
				<Route exact path='/Visa' element={<Dashboard />} />
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/staff' element={<Dashboard />} />
				<Route exact path='/country/:id' element={<Dashboard />} />
				<Route exact path='/premission' element={<Dashboard />} />

				<Route exact path='/' element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
