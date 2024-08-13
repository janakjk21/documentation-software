import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	setVisaid: null,
	userId: null,
	companyUrlId: null, // Add this line to the initial state
};

const visaStatusSlice = createSlice({
	name: 'visaStatus',
	initialState,
	reducers: {
		updateState: (state, action) => {
			const { type, value } = action.payload;
			console.log(action.payload, 'this is the action payload');
			if (type === 'setVisaid') {
				state.setVisaid = value;
				state.userId = null; // Reset userId when setVisaid is updated
			} else if (type === 'userId') {
				state.userId = value;
				state.setVisaid = null; // Reset setVisaid when userId is updated
			} else if (type === 'companyUrlId') {
				state.companyUrlId = null;
				state.companyUrlId = value; // Save as companyUrlId
			}
		},
	},
});

export const { updateState } = visaStatusSlice.actions;

export default visaStatusSlice.reducer;
