import { createSlice } from "@reduxjs/toolkit";


 const initialState = [{

}]
export const usersSlice =  createSlice({
    name:'users',
    initialState,
    reducers:{

    }

})

export const selectAllUsers = usersSlice.actions;
export default usersSlice.reducer;