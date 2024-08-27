import { combineReducers } from 'redux';
import companyProfileReducer from '../redux/companyProfileSlice'; // Adjust the path as necessary
import tableSlice from '../redux/tableSlice'; // Adjust the path as necessary
import visaStatusSlice from './visaStatusSlice';
import staff from './staff'; // Adjust the path as necessary
import login from './user'; // Adjust the path as necessary
const rootReducer = combineReducers({
	companyProfile: companyProfileReducer,
	table: tableSlice,
	visaStatus: visaStatusSlice,
	staffdetails: staff,
	user: login,
	// Add other reducers here
});

export default rootReducer;
