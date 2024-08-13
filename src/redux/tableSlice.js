import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const tableSlice = createSlice({
	name: 'table',
	initialState: {
		data: [
			{
				id: '',
				passportNo: '',
				name: '',
				dateOfBirth: '',
				dateOfPassportExpire: '',
				age: '',
				nomineeName: '',
				contactNo: '',
				height: '',
				education: '',
				workExperience: '',
				avatar: '',
				medical: false,
				originalPassport: false,
				policeReport: false,
				photo: false,
				video: false,
				certificate: false,
				status: '',
				visaCheck: '',
				readyFlight: false,
				shramStatus: {
					airlineName: '',
					amountPaid: '',
					flightDate: '',
					flightTime: '',
					orientation: '',
				},
			},
		],
		checkeddata: [
			{
				id: '',
				passportNo: '',
				name: '',
				dateOfBirth: '',
				dateOfPassportExpire: '',
				age: '',
				nomineeName: '',
				contactNo: '',
				height: '',
				education: '',
				workExperience: '',
				avatar: null,
				medical: null,
				originalPassport: null,
				policeReport: null,
				photo: null,
				video: null,
				certificate: null,
				status: '',
				visaCheck: '',
				shramStatus: {
					amountPaid: '',
					flightDate: '',
					flightTime: '',
					orientation: '',
					airlineName: '',
				},
			},
		],
	},
	reducers: {
		saveUserData: (state, action) => {
			const userData = {
				id: uuidv4(),
				passportNo: action.payload.passportNo || '',
				name: action.payload.name || '',
				dateOfBirth: action.payload.dateOfBirth || '',
				dateOfPassportExpire: action.payload.passportExpiryDate || '',
				age: action.payload.age || '',
				nomineeName: action.payload.nomineeName || '',
				contactNo: action.payload.contactNo || '',
				height: action.payload.height || '',
				education: action.payload.education || '',
				workExperience: action.payload.workExperience || '',
				avatar: action.payload.avatar || '',
				medical: action.payload.medical || false,
				originalPassport: action.payload.originalPassport || false,
				policeReport: action.payload.policeReport || false,
				photo: action.payload.photo || false,
				video: action.payload.video || false,
				certificate: action.payload.certificate || false,
				status: action.payload.status || '',
				visaCheck: action.payload.visaCheck || '',
				readyFlight: action.payload.readyFlight || false,
				companyId: action.payload.companyId || '',
				shramStatus: {
					amountPaid: action.payload.amountPaid || '',
					flightDate: action.payload.flightDate || '',
					flightTime: action.payload.flightTime || '',
					orientation: action.payload.orientation || '',
				},
			};

			const checkedData = {
				id: userData.id,
				passportNo: userData.passportNo || '',
				name: userData.name || '',
				dateOfBirth: userData.dateOfBirth || '',
				dateOfPassportExpire: userData.passportExpiryDate || '',
				age: userData.age || '',
				nomineeName: userData.nomineeName || '',
				contactNo: userData.contactNo || '',
				height: userData.height || '',
				education: userData.education || '',
				workExperience: userData.workExperience || '',
				avatar:
					userData.avatar instanceof FileList && userData.avatar.length > 0
						? URL.createObjectURL(userData.avatar[0])
						: '',
				medical:
					userData.medical instanceof FileList && userData.medical.length > 0,
				originalPassport:
					userData.originalPassport instanceof FileList &&
					userData.originalPassport.length > 0,
				policeReport:
					userData.policeReport instanceof FileList &&
					userData.policeReport.length > 0,
				photo: userData.photo instanceof FileList && userData.photo.length > 0,
				video: userData.video instanceof FileList && userData.video.length > 0,
				certificate:
					userData.certificate instanceof FileList &&
					userData.certificate.length > 0,
				status: userData.status || '',
				companyId: userData.companyId || '',
				visaCheck: userData.visaCheck || '',
			};

			// Remove the user from both state.data and state.checkeddata
			state.data = state.data.filter((user) => user.id !== action.payload.id);
			state.checkeddata = state.checkeddata.filter(
				(user) => user.id !== action.payload.id
			);

			console.log(userData && checkedData, 'this is the data');
			// Push the checkedData to state.checkeddata
			state.checkeddata.push(checkedData);
			state.data.push(userData);
		},
		updateUserStatus: (state, action) => {
			const { id, status } = action.payload;
			console.log(id, status, 'this is the payload');
			const checkedIndex = state.checkeddata.findIndex(
				(user) => user.id === id
			);
			if (checkedIndex !== -1) {
				state.checkeddata[checkedIndex].status = status;
			}
			const index = state.data.findIndex((user) => user.id === id);
			if (index !== -1) {
				state.data[index].status = status;
			}
		},
		updateVisaStatus: (state, action) => {
			const { id, visaStatus } = action.payload;
			console.log(id, visaStatus, 'this is the payload');
			const checkedIndex = state.checkeddata.findIndex(
				(user) => user.id === id
			);
			if (checkedIndex !== -1) {
				state.checkeddata[checkedIndex].visaStatus = visaStatus;
			}
			const index = state.data.findIndex((user) => user.id === id);
			if (index !== -1) {
				state.data[index].visaStatus = visaStatus;
			}
		},
		updateShramStatus: (state, action) => {
			const { id, shramStatus } = action.payload;
			console.log(id, shramStatus, 'this is the payload');

			const checkedIndex = state.checkeddata.findIndex(
				(user) => user.id === id
			);
			if (checkedIndex !== -1) {
				state.checkeddata[checkedIndex].shramStatus = shramStatus;
				state.checkeddata[checkedIndex].readyFlight =
					typeof action.payload.readyFlight === 'boolean'
						? action.payload.readyFlight
						: false;
				state.checkeddata[checkedIndex].amountOrientation =
					typeof action.payload.amountOrientation === 'boolean'
						? action.payload.amountOrientation
						: false;
				state.checkeddata[checkedIndex].flightDate = action.payload.flightDate
					? new Date(action.payload.flightDate).toISOString().split('T')[0]
					: '';
				state.checkeddata[checkedIndex].flightTime = action.payload.flightTime
					? new Date(action.payload.flightTime)
							.toISOString()
							.split('T')[1]
							.slice(0, 5)
					: '';
				state.checkeddata[checkedIndex].airlineName = action.payload.airlineName
					? action.payload.airlineName.trim()
					: '';
			}

			const index = state.data.findIndex((user) => user.id === id);
			if (index !== -1) {
				state.data[index].shramStatus = shramStatus;
				state.data[index].readyFlight =
					typeof action.payload.readyFlight === 'boolean'
						? action.payload.readyFlight
						: false;
				state.data[index].amountOrientation =
					typeof action.payload.amountOrientation === 'boolean'
						? action.payload.amountOrientation
						: false;
				state.data[index].flightDate = action.payload.flightDate
					? new Date(action.payload.flightDate).toISOString().split('T')[0]
					: '';
				state.data[index].flightTime = action.payload.flightTime
					? new Date(action.payload.flightTime)
							.toISOString()
							.split('T')[1]
							.slice(0, 5)
					: '';
				state.data[index].airlineName = action.payload.airlineName
					? action.payload.airlineName.trim()
					: '';
			}
		},
		deleteAllUserData: (state) => {
			state.data = [];
			state.checkeddata = [];
		},
	},
});

export const {
	saveUserData,
	updateUserData,
	deleteUserData,
	updateUserStatus,
	deleteAllUserData,
	updateVisaStatus,
	updateShramStatus,
} = tableSlice.actions;

export const saveUserDataAndCheck = (userData) => (dispatch) => {
	dispatch(saveUserData(userData));
	dispatch(saveUserDataInChecker(userData));
};

export default tableSlice.reducer;
