import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { apiSlice } from "../../../../app/api/apiSlice";
// import serviceProps from "../../../../app/utils/props/serviceProps";
// interface servicesProp extends  serviceProps{}


const servicesAdapter = createEntityAdapter({
    // sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = servicesAdapter.getInitialState()

export const servicesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getServices: builder.query<any, any>({
            query: () => ({
                url: '/services',
                validateStatus: (response:any, result:any) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData:any) => {
                const loadedServices = responseData.map((service:any) => {
                    service.id = service._id
                    return service
                });
                return servicesAdapter.setAll(initialState, loadedServices)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Service', id: 'LIST' },
                        ...result.ids.map((id:string) => ({ type: 'Services', id }))
                    ]
                } else return [{ type: 'Service', id: 'LIST' }]
            }
        }),
        addNewService: builder.mutation({
            query: service => ({
                url: '/services',
                method: 'SERVICE',
                body: service
            }),
            invalidatesTags: [
                { type: 'Service', id: "LIST" }
            ]
        }),
        updateService: builder.mutation({
            query: service => ({
                url: '/services',
                method: 'PATCH',
                body: service,
                
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Service', id: arg.id }
            ]
        }),
        deleteService: builder.mutation({
            query: ({ _id }) => ({
                url: `/services`,
                method: 'DELETE',
                body: { _id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Service', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetServicesQuery,
    useAddNewServiceMutation,
    useUpdateServiceMutation,
    useDeleteServiceMutation,
} = servicesApiSlice

// returns the query result object
export const selectServicesResult = servicesApiSlice.endpoints.getServices.select("Services")

// creates memoized selector
const selectServicesData = createSelector(
    selectServicesResult,
    servicesResult => servicesResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllServices,
    selectById: selectServiceById,
    selectIds: selectServiceIds
    // Pass in a selector that returns the notes slice of state
} = servicesAdapter.getSelectors((state:any) => selectServicesData(state) ?? initialState)