import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { apiSlice } from "../../../../app/api/apiSlice";
// import teamProps from "../../../../app/utils/props/teamProps";
// interface teamsProp extends  teamProps{}


const teamsAdapter = createEntityAdapter({
    // sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = teamsAdapter.getInitialState()

export const teamsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTeams: builder.query<any, any>({
            query: () => ({
                url: '/teams',
                validateStatus: (response:any, result:any) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData:any) => {
                const loadedTeams = responseData.map((team:any) => {
                    team.id = team._id
                    return team
                });
                return teamsAdapter.setAll(initialState, loadedTeams)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Team', id: 'LIST' },
                        ...result.ids.map((id:string) => ({ type: 'Teams', id }))
                    ]
                } else return [{ type: 'Team', id: 'LIST' }]
            }
        }),
        addNewTeam: builder.mutation({
            query: team => ({
                url: '/teams',
                method: 'POST',
                body: team
            }),
            invalidatesTags: [
                { type: 'Team', id: "LIST" }
            ]
        }),
        updateTeam: builder.mutation({
            query: team => ({
                url: '/teams',
                method: 'PATCH',
                body: team,
                
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Team', id: arg.id }
            ]
        }),
        deleteTeam: builder.mutation({
            query: ({ _id }) => ({
                url: `/teams`,
                method: 'DELETE',
                body: { _id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Team', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetTeamsQuery,
    useAddNewTeamMutation,
    useUpdateTeamMutation,
    useDeleteTeamMutation,
} = teamsApiSlice

// returns the query result object
export const selectTeamsResult = teamsApiSlice.endpoints.getTeams.select("Teams")

// creates memoized selector
const selectTeamsData = createSelector(
    selectTeamsResult,
    teamsResult => teamsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllTeams,
    selectById: selectTeamById,
    selectIds: selectTeamIds
    // Pass in a selector that returns the notes slice of state
} = teamsAdapter.getSelectors((state:any) => selectTeamsData(state) ?? initialState)