import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000' }),
	endpoints: (builder) => ({
		getDemand: builder.query({
			query: (demandId) => {
				console.log(demandId, 'This is id ');
				return `demand/${demandId.demandId}/userdemand`;
			},
		}),
		deleteDemand: builder.mutation({
			query: (demandId, userDemandId) => ({
				url: `demand/${demandId}/userdemand/${userDemandId}`,
				method: 'DELETE',
			}),
		}),
		createDemand: builder.mutation({
			query: ({ demandId, data }) => (
				{
					url: `demand/${demandId}/userdemand`,
					method: 'POST',
					body: {
						name: 'janak',
						passport_no: '123456',
						address: 'kathmandu',
						status: 'pending',
						passport_expiry: '2022-12-12',
					},
				},
				console.log('data', data.name, data.passport_no, data.passport_expiry)
			),
		}),
		updateDemand: builder.mutation({
			query: (demandId, userDemandId, data) => ({
				url: `demand/${demandId}/userdemand/${userDemandId}`,
				method: 'PUT',
				body: data,
			}),
		}),
	}),
});

export const {
	useGetDemandQuery,
	useDeleteDemandMutation,
	useCreateDemandMutation,
	useUpdateDemandMutation,
} = api;

export default api;
