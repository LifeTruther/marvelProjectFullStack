import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'classic drone',
        super_power: "2000.00",
        comics_appeared_in: 5,
        description: '4k',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName } = rootSlice.actions;