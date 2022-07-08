import { configureStore } from "@reduxjs/toolkit"

import reducer from "./reduces"


import StudentApi from "./reduces/rtk-query"

const store=configureStore({
    reducer:{
        ...reducer,
        [StudentApi.reducerPath]:StudentApi.reducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(StudentApi.middleware)
})


export  default store