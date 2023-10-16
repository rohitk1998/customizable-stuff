import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import * as Slice from "../../Redux/slices/index"
import * as Common from "../../../Common/index";

let errMsg ; 

export const AuthApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://10.1.4.251:3004/v1/" }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      query: (userData) => {
        return {
          url: "user/login",
          method: "POST",
          mode: "cors",
          credentials: "same-origin",
          body: userData,
        };
      },
      async onQueryStarted(userData, { dispatch, queryFulfilled }) {
        console.log("starting!", userData);
        console.log("queryFulfilled",queryFulfilled);
        try {
          const { data } = await queryFulfilled;
          console.log("queryFulfilled",queryFulfilled);
          console.log("sucess", data);
          dispatch(Slice.setUser("dhkjashdkjsahkjdhaskjdhskjhdkjsahdkjsahdkjsahdkj"));
          dispatch(
            Slice.setToast({
              message: "Ohh you have login successfully !!",
              success: true,
              error: false,
            }))
        } catch (err) {
          console.log("queryFulfilled",queryFulfilled);
          console.log("error... ", err.error.data.response.data);
          errMsg = Common.Helper.ResponseHelper.errorHandler(err.error.data.response.data)
          dispatch(Slice.setToast({
            message: errMsg,
            success: false,
            error: true,
          }))
        }
      },
      invalidatesTags: [{ token: "Token" }],
      transformResponse: (response) => response,
    }),

    authRegister: builder.mutation({
      query: (userPayload) => {
        console.log("userPayload:::::",userPayload);
        return {
          url: "user/register",
          method: "POST",
          mode: "cors",
          credentials: "same-origin",
          body: userPayload,
        }
      }
    })
  }),
});

export const { useAuthLoginMutation, usePrefetch,useAuthRegisterMutation } = AuthApi;
