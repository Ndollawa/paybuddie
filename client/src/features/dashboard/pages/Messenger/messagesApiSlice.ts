import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../../../app/api/apiSlice";
import { RootState } from "../../../../app/stores/store";

const messagesAdapter = createEntityAdapter({
    // sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = messagesAdapter.getInitialState()

export const messagesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMessages: builder.query<any,any>({
            query: () => ({
                url: '/messages',
                validateStatus: (response:any, result:any) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData:any) => {
                const loadedMessages = responseData.map((message:any) => {
                    message.id = message._id
                    return message
                });
                return messagesAdapter.setAll(initialState, loadedMessages)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Message', id: 'LIST' },
                        ...result.ids.map((id:string) => ({ type: 'Message', id }))
                    ]
                } else return [{ type: 'Message', id: 'LIST' }]
            }
        }),
        addNewMessage: builder.mutation({
            query: initialMessage => ({
                url: '/messages',
                method: 'POST',
                body: {
                    ...initialMessage,
                }
            }),
            invalidatesTags: [
                { type: 'Message', id: "LIST" }
            ]
        }),
        updateMessage: builder.mutation({
            query: initialMessage => ({
                url: '/messages',
                method: 'PATCH',
                body: {
                    ...initialMessage,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Message', id: arg.id }
            ]
        }),
        deleteMessage: builder.mutation({
            query: ({ id }) => ({
                url: `/messages`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Message', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetMessagesQuery,
    useAddNewMessageMutation,
    useUpdateMessageMutation,
    useDeleteMessageMutation,
} = messagesApiSlice

// returns the query result object
export const selectMessagesResult = messagesApiSlice.endpoints.getMessages.select('Message')

// creates memoized selector
const selectMessagesData = createSelector(
    selectMessagesResult,
    messagesResult => messagesResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllMessages,
    selectById: selectMessageById,
    selectIds: selectMessageIds
    // Pass in a selector that returns the messages slice of state
} = messagesAdapter.getSelectors((state:RootState) => selectMessagesData(state) ?? initialState)