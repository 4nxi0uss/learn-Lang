// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const { VITE_HOSTNAME, VITE_PROTOCOL, VITE_PORT, VITE_API } = import.meta.env

// Define a service using a base URL and expected endpoints
export const learnLangApi = createApi({
    reducerPath: 'lernLangApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${VITE_PROTOCOL}://${VITE_HOSTNAME}:${VITE_PORT}${VITE_API}` }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `/cat/categories`,
        }),
        getSubCategories: builder.query({
            query: (categoryId: number) => ({
                url: `/cat/sub-categories/${categoryId}`
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCategoriesQuery, useGetSubCategoriesQuery } = learnLangApi