import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const companyProfileSlice = createSlice({
	name: 'companyProfile',
	initialState: [],
	reducers: {
		saveProfile: (state, action) => {
			const profile = { ...action.payload, id: uuidv4() };
			state.push(profile);
		},
		deleteProfile: (state, action) => {
			return state.filter((profile) => profile.id !== action.payload);
		},
		saveCompanyUrlId: (state, action) => {
			state.companyUrlId = action.payload;
		},
	},
});

export const { saveProfile, deleteProfile, saveCompanyUrlId } =
	companyProfileSlice.actions;
export default companyProfileSlice.reducer;
