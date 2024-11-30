'use  client'

import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"
import { OnlineTracking } from "./slices/online-member-slice"


const rootReducer = combineReducers({
    // Add your reducers here
    onlineTracking: OnlineTracking,
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

// exporting the type definitions
export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch


//this useAppSelector has type definitions added
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
