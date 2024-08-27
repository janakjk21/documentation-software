import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const companyProfileSlice = createSlice({
	name: 'companyProfile',
	initialState: {
		profiles: [],
		demandData: [],
		companyUrlId: null,
	},
	reducers: {
		saveProfile: (state, action) => {
			console.log(action.payload, 'action.payload');
			const profile = { ...action.payload, id: uuidv4() };
			state.profiles.push(profile);
		},
		deleteProfile: (state, action) => {
			state.profiles = state.profiles.filter(
				(profile) => profile.id !== action.payload
			);
		},
		saveCompanyUrlId: (state, action) => {
			state.companyUrlId = action.payload;
		},
		setDemandData: (state, action) => {
			state.demandData = action.payload;
		},
	},
});

export const { saveProfile, deleteProfile, saveCompanyUrlId, setDemandData } =
	companyProfileSlice.actions;
export default companyProfileSlice.reducer;
