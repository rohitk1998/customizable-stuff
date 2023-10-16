import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as Slice from "../../Redux/slices/index";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://10.1.4.251:3004/v1/user/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.authSlice?.userAuth?.token;
      headers.set("api-access-token", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (payload) => {
      // console.log("paylpoad::::::::::",payload)
      return {
          url: "getAllUser/50/0",
          method: "POST",
          mode: "cors",
          credentials: "same-origin",
          body: payload,
        };
      },
      providesTags:["User"],
      async onQueryStarted(payload, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(Slice.setUsersData(data?.response?.data?.data));
        } catch (err) {
          console.log("Error:::", err);
        }
      },
      transformResponse: (response) => response,
    }),
    updateUser: builder.mutation({
      query: (payload) => {
        return {
          url: "editProfileById",
          method: "POST",
          mode: "cors",
          credentials: "same-origin",
          body: payload,
        }
      },
      invalidatesTags:["User"]
      
    }),
    
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation } = userApi;
