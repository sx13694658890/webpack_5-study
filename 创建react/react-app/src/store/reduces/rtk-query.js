import { createApi,fakeBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react";






const StudentApi=createApi({
    reducerPath:"StudentApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://127.0.0.1/api/",
        method:"get"
    }),
    endpoints:(builder)=>({
        getSutdent:builder.query({query:(name)=>`student/${name}`}),
        setSudent:builder.mutation({})
    })
})


export const { useGetSutdentQuery }=StudentApi


export default StudentApi