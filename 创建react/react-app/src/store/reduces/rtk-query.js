import {
  createApi,
  fakeBaseQuery,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const StudentApi = createApi({
  reducerPath: "StudentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1/api/",
    method: "get",
  }),
  tagTypes: ["student"],
  endpoints: (builder) => ({
    getSutdent: builder.query({
      query: (name) => `student/${name}`,
      transformResponse: (baseQueryReturnValue) => {
        return baseQueryReturnValue.data;
      },
      providesTags: ["student"],
    }),
    deleteStudent: builder.mutation({
      query: () => ({
        url: "student",
        method: "post",
        body: { data:"aa" },
      }),
      
      invalidatesTags:(result,error,stu)=>[{type:"student",id:stu.id},{type:"student",id:"LIST"}]
    }),
    
  }),
});

export const { useGetSutdentQuery, useDeleteStudentMutation } = StudentApi;

export default StudentApi;
