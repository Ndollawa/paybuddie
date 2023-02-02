import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { apiSlice } from "../../../../app/api/apiSlice";
import { sliderProps } from "../../../../app/utils/props/sliderProps";
interface slidersProps extends  sliderProps{}


const slidersAdapter = createEntityAdapter({
    // sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = slidersAdapter.getInitialState()

export const slidersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSliders: builder.query<any, any>({
            query: () => ({
                url: '/sliders',
                validateStatus: (response:any, result:any) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData:any) => {
                const loadedSliders = responseData.map((slider:any) => {
                    slider.id = slider._id
                    return slider
                });
                return slidersAdapter.setAll(initialState, loadedSliders)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Slider', id: 'LIST' },
                        ...result.ids.map((id:string) => ({ type: 'Sliders', id }))
                    ]
                } else return [{ type: 'Slider', id: 'LIST' }]
            }
        }),
        addNewSlider: builder.mutation({
            query: initialSlider => ({
                url: '/slider',
                method: 'POST',
                body: {
                    ...initialSlider,
                }
            }),
            invalidatesTags: [
                { type: 'Slider', id: "LIST" }
            ]
        }),
        updateSlider: builder.mutation({
            query: initialSlider => ({
                url: '/sliders',
                method: 'PATCH',
                body: {
                    ...initialSlider,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Slider', id: arg.id }
            ]
        }),
        deleteSlider: builder.mutation({
            query: ({ _id }) => ({
                url: `/sliders`,
                method: 'DELETE',
                body: { _id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Slider', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetSlidersQuery,
    useAddNewSliderMutation,
    useUpdateSliderMutation,
    useDeleteSliderMutation,
} = slidersApiSlice

// returns the query result object
export const selectSlidersResult = slidersApiSlice.endpoints.getSliders.select("Sliders")

// creates memoized selector
const selectSlidersData = createSelector(
    selectSlidersResult,
    slidersResult => slidersResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllSliders,
    selectById: selectSliderById,
    selectIds: selectSliderIds
    // Pass in a selector that returns the notes slice of state
} = slidersAdapter.getSelectors((state:any) => selectSlidersData(state) ?? initialState)