import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../../../app/api/apiSlice";
import { RootState } from "../../../../app/stores/store";

const conversationsAdapter = createEntityAdapter({
    // sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = conversationsAdapter.getInitialState()

export const conversationsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getConversations: builder.query<any,any>({
            query: () => ({
                url: '/conversations',
                validateStatus: (response:any, result:any) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData:any) => {
                const loadedConversations = responseData.map((conversation:any) => {
                    conversation.id = conversation._id
                    return conversation
                });
                return conversationsAdapter.setAll(initialState, loadedConversations)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Conversation', id: 'LIST' },
                        ...result.ids.map((id:string) => ({ type: 'Conversation', id }))
                    ]
                } else return [{ type: 'Conversation', id: 'LIST' }]
            }
        }),
        addNewConversation: builder.mutation({
            query: initialConversation => ({
                url: '/conversations',
                method: 'POST',
                body: {
                    ...initialConversation,
                }
            }),
            invalidatesTags: [
                { type: 'Conversation', id: "LIST" }
            ]
        }),
        updateConversation: builder.mutation({
            query: initialConversation => ({
                url: '/conversations',
                method: 'PATCH',
                body: {
                    ...initialConversation,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Conversation', id: arg.id }
            ]
        }),
        deleteConversation: builder.mutation({
            query: ({ id }) => ({
                url: `/conversations`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Conversation', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetConversationsQuery,
    useAddNewConversationMutation,
    useUpdateConversationMutation,
    useDeleteConversationMutation,
} = conversationsApiSlice

// returns the query result object
export const selectConversationsResult = conversationsApiSlice.endpoints.getConversations.select('Conversation')

// creates memoized selector
const selectConversationsData = createSelector(
    selectConversationsResult,
    conversationsResult => conversationsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllConversations,
    selectById: selectConversationById,
    selectIds: selectConversationIds
    // Pass in a selector that returns the conversations slice of state
} = conversationsAdapter.getSelectors((state:RootState) => selectConversationsData(state) ?? initialState)