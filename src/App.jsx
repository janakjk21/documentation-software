import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Initailform from './pages/Initailform';
import DataTable from './pages/DataTable';

function App() {
	const location = useLocation();

	useEffect(() => {
		document.querySelector('html').style.scrollBehavior = 'auto';
		window.scroll({ top: 0 });
		document.querySelector('html').style.scrollBehavior = '';
	}, [location.pathname]); // triggered on route change

	return (
		<>
			<Routes>
				<Route exact path='/form' element={<Dashboard />} />
				<Route exact path='/table' element={<Dashboard />} />
				<Route exact path='/profile' element={<Dashboard />} />
				<Route exact path='/shram' element={<Dashboard />} />
				<Route exact path='/' element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
