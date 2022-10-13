import { configureStore } from '@reduxjs/toolkit'

import { sessionStoreMiddleware } from '../Middleware/SessionStoreMiddleware'

import { learnLangApi } from '../Services/learnLangApi'

import categorySlice from '../Slice/categorySlice'
import inputRowSlice from '../Slice/inputRowSlice'

export const store = configureStore({
    reducer: {
        category: categorySlice,
        inputForm: inputRowSlice,
        [learnLangApi.reducerPath]: learnLangApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(learnLangApi.middleware).concat(sessionStoreMiddleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch