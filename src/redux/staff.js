import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	staffList: [],
};

const staffSlice = createSlice({
	name: 'staff',
	initialState,
	reducers: {
		createStaff: (state, action) => {
			const staff = action.payload;
			if (!staff.id) {
				staff.id = uuidv4();
			}
			state.staffList.push(staff);
		},
		deleteStaff: (state, action) => {
			state.staffList = state.staffList.filter(
				(staff) => staff.id !== action.payload
			);
		},
	},
});

export const { createStaff, deleteStaff } = staffSlice.actions;
export default staffSlice.reducer;
