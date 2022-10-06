import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
    cat: string
}

// Define the initial state using that type
const initialState: CounterState = {
    cat: String(sessionStorage.getItem('category')),
}

export const categorySlice = createSlice({
    name: 'category',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        categoryName: (state, action: PayloadAction<string>) => {
            state.cat = action?.payload
        },
    },
})

export const { categoryName } = categorySlice.actions

export default categorySlice.reducer