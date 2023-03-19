import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { apiSlice } from "../../../../app/api/apiSlice";
// import slideProps from "../../../../app/utils/props/slideProps";
// interface slidesProp extends  slideProps{}


const slidesAdapter = createEntityAdapter({
    // sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = slidesAdapter.getInitialState()

export const slidesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSlides: builder.query<any, any>({
            query: () => ({
                url: '/slides',
                validateStatus: (response:any, result:any) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData:any) => {
                const loadedSlides = responseData.map((slide:any) => {
                    slide.id = slide._id
                    return slide
                });
                return slidesAdapter.setAll(initialState, loadedSlides)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Slide', id: 'LIST' },
                        ...result.ids.map((id:string) => ({ type: 'Slides', id }))
                    ]
                } else return [{ type: 'Slide', id: 'LIST' }]
            }
        }),
        addNewSlide: builder.mutation({
            query: slide => ({
                url: '/slides',
                method: 'POST',
                body: slide
            }),
            invalidatesTags: [
                { type: 'Slide', id: "LIST" }
            ]
        }),
        updateSlide: builder.mutation({
            query: slide => ({
                url: '/slides',
                method: 'PATCH',
                body: slide,
                
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Slide', id: arg.id }
            ]
        }),
        deleteSlide: builder.mutation({
            query: ({ _id }) => ({
                url: `/slides`,
                method: 'DELETE',
                body: { _id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Slide', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetSlidesQuery,
    useAddNewSlideMutation,
    useUpdateSlideMutation,
    useDeleteSlideMutation,
} = slidesApiSlice

// returns the query result object
export const selectSlidesResult = slidesApiSlice.endpoints.getSlides.select("Slides")

// creates memoized selector
const selectSlidesData = createSelector(
    selectSlidesResult,
    slidesResult => slidesResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllSlides,
    selectById: selectSlideById,
    selectIds: selectSlideIds
    // Pass in a selector that returns the notes slice of state
} = slidesAdapter.getSelectors((state:any) => selectSlidesData(state) ?? initialState)