import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { apiSlice } from "../../../../app/api/apiSlice";
// import postCategoryProps from "../../../../app/utils/props/postCategoryProps";
// interface postCategoryProp extends  postCategoryProps{}


const postCategoryAdapter = createEntityAdapter({
    // sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = postCategoryAdapter.getInitialState()

export const postCategoryApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPostCategory: builder.query<any, any>({
            query: () => ({
                url: '/postCategory',
                validateStatus: (response:any, result:any) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData:any) => {
                const loadedPostCategory = responseData.map((postCategory:any) => {
                    postCategory.id = postCategory._id
                    return postCategory
                });
                return postCategoryAdapter.setAll(initialState, loadedPostCategory)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'PostCategory', id: 'LIST' },
                        ...result.ids.map((id:string) => ({ type: 'PostCategory', id }))
                    ]
                } else return [{ type: 'PostCategory', id: 'LIST' }]
            }
        }),
        addNewPostCategory: builder.mutation({
            query: postCategory => ({
                url: '/postCategory',
                method: 'POSTCATEGORY',
                body: postCategory
            }),
            invalidatesTags: [
                { type: 'PostCategory', id: "LIST" }
            ]
        }),
        updatePostCategory: builder.mutation({
            query: postCategory => ({
                url: '/postCategory',
                method: 'PATCH',
                body: postCategory,
                
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'PostCategory', id: arg.id }
            ]
        }),
        deletePostCategory: builder.mutation({
            query: ({ _id }) => ({
                url: `/postCategory`,
                method: 'DELETE',
                body: { _id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'PostCategory', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetPostCategoryQuery,
    useAddNewPostCategoryMutation,
    useUpdatePostCategoryMutation,
    useDeletePostCategoryMutation,
} = postCategoryApiSlice

// returns the query result object
export const selectPostCategoryResult = postCategoryApiSlice.endpoints.getPostCategory.select("PostCategory")

// creates memoized selector
const selectPostCategoryData = createSelector(
    selectPostCategoryResult,
    postCategoryResult => postCategoryResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllPostCategory,
    selectById: selectPostCategoryById,
    selectIds: selectPostCategoryIds
    // Pass in a selector that returns the notes slice of state
} = postCategoryAdapter.getSelectors((state:any) => selectPostCategoryData(state) ?? initialState)