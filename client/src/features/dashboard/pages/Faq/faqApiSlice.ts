import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { RootState } from "../../../../app/stores/store";
import { apiSlice } from "../../../../app/api/apiSlice";
import { faqProps } from "../../../../app/utils/props/faqProps";



interface faqsProps extends faqProps{}


const faqsAdapter = createEntityAdapter({
    // sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = faqsAdapter.getInitialState()

export const faqsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getFaqs: builder.query<any, any>({
            query: () => ({
                url: '/faqs',
                validateStatus: (response:any, result:any) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData:faqsProps) => {
                const loadedFaqs = Object.values(responseData).map((faq:any) => {
                    faq.id = faq._id
                    return faq
                });
                return faqsAdapter.setAll(initialState, loadedFaqs)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Faq', id: 'LIST' },
                        ...result.ids.map((id:string) => ({ type: 'Faq', id }))
                    ]
                } else return [{ type: 'Faq', id: 'LIST' }]
            }
        }),
        addNewFaq: builder.mutation({
            query: initialFaq => ({
                url: '/faqs',
                method: 'POST',
                body: {
                    ...initialFaq,
                }
            }),
            invalidatesTags: [
                { type: 'Faq', id: "LIST" }
            ]
        }),
        updateFaq: builder.mutation({
            query: initialFaq => ({
                url: '/faqs',
                method: 'PATCH',
                body: {
                    ...initialFaq,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Faq', id: arg.id }
            ]
        }),
        deleteFaq: builder.mutation({
            query: ({ _id }) => ({
                url: `/faqs`,
                method: 'DELETE',
                body: { _id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Faq', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetFaqsQuery,
    useAddNewFaqMutation,
    useUpdateFaqMutation,
    useDeleteFaqMutation,
} = faqsApiSlice

// returns the query result object
export const selectFaqsResult = faqsApiSlice.endpoints.getFaqs.select('Faq')

// creates memoized selector
const selectFaqsData = createSelector(
    selectFaqsResult,
    faqsResult => faqsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllFaqs,
    selectById: selectFaqById,
    selectIds: selectFaqIds
    // Pass in a selector that returns the notes slice of state
} = faqsAdapter.getSelectors((state:RootState) => selectFaqsData(state) ?? initialState)