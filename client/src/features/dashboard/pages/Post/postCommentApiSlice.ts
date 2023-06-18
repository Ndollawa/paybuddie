import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { RootState } from "../../../../app/stores/store";
import { apiSlice } from "../../../../app/api/apiSlice";
// import postProps from "../../../../app/utils/props/postProps";
// interface postCommentProp extends  postProps{}


const postCommentAdapter = createEntityAdapter({
    // sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = postCommentAdapter.getInitialState()

export const postCommentApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPostComment: builder.query<any, any>({
            query: () => ({
                url: '/post-comments',
                validateStatus: (response:any, result:any) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData:any) => {
                const loadedPostComment = responseData.map((comment:any) => {
                    comment.id = comment._id
                    return comment
                });
                return postCommentAdapter.setAll(initialState, loadedPostComment)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'PostComment', id: 'LIST' },
                        ...result.ids.map((id:string) => ({ type: 'PostComment', id }))
                    ]
                } else return [{ type: 'PostComment', id: 'LIST' }]
            }
        }),
        addNewPostComment: builder.mutation({
            query: comment => ({
                url: '/post-comments',
                method: 'POST',
                body: comment
            }),
            invalidatesTags: [
                { type: 'PostComment', id: "LIST" }
            ]
        }),
        updatePostComment: builder.mutation({
            query: comment => ({
                url: '/post-comments',
                method: 'PATCH',
                body: comment,
                
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'PostComment', id: arg.id }
            ]
        }),
        deletePostComment: builder.mutation({
            query: ({ _id }) => ({
                url: `/post-comments`,
                method: 'DELETE',
                body: { _id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'PostComment', id: arg.id }
            ]
        }),
        addNewPostCommentReply: builder.mutation({
            query: reply => ({
                url: '/post-comments/reply',
                method: 'POST',
                body: reply
            }),
            invalidatesTags: [
                { type: 'PostComment', id: "LIST" }
            ]
        }),
        updatePostCommentReply: builder.mutation({
            query: reply => ({
                url: '/post-comments/reply',
                method: 'PATCH',
                body: reply,
                
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'PostComment', id: arg.id }
            ]
        }),
        deletePostCommentReply: builder.mutation({
            query: ({ _id }) => ({
                url: `/post-comments/reply`,
                method: 'DELETE',
                body: { _id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'PostComment', id: arg.id }
            ]
        }),

    }),
})

export const {
    useGetPostCommentQuery,
    useAddNewPostCommentMutation,
    useUpdatePostCommentMutation,
    useDeletePostCommentMutation,
    useAddNewPostCommentReplyMutation,
    useUpdatePostCommentReplyMutation,
    useDeletePostCommentReplyMutation,
} = postCommentApiSlice

// returns the query result object
export const selectPostCommentResult = postCommentApiSlice.endpoints.getPostComment.select("PostComment")

// creates memoized selector
const selectPostCommentData = createSelector(
    selectPostCommentResult,
    postCommentResult => postCommentResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllPostComment,
    selectById: selectPostCommentById,
    selectIds: selectPostCommentIds
    // Pass in a selector that returns the notes slice of state
} = postCommentAdapter.getSelectors((state:RootState) => selectPostCommentData(state) ?? initialState)