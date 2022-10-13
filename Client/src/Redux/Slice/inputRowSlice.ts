import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
    inputFormData: any
}

// Define the initial state using that type
const initialState: CounterState = {
    inputFormData: JSON.parse(String(sessionStorage.getItem('addForm'))) ?? { '0': {} },
}

export const inputRowSlice = createSlice({
    name: 'formInput',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        inputFormRowData: (state, action: PayloadAction<Object>) => {
            state.inputFormData = action?.payload
        },
    },
})

export const { inputFormRowData } = inputRowSlice.actions

export default inputRowSlice.reducer