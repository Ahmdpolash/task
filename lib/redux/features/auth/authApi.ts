import Cookies from "js-cookie";
import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../tagTypes";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.me],
    }),

    registerOrganization: builder.mutation({
      query: (data) => ({
        url: "/auth/register-organization",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.me],
    }),
    registerNormalUser: builder.mutation({
      query: (data) => ({
        url: "/auth/register-normal-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.me],
    }),

    verifyNormalUser: builder.mutation({
      query: (data) => ({
        url: "/auth/verify-normal-user-otp",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.me],
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: [tagTypes.me],

      // set the user in the store after successful login
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          Cookies.set("token", result.data.data.accessToken);
          localStorage.setItem("token", result.data.data.accessToken);
        } catch (error) {
          console.log(error);
        }
      },
    }),

    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),

    verifyResetPassOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/verify-reset-password-otp",
        method: "POST",
        body: data,
      }),
    }),

    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "PUT",
        body: data,
      }),
    }),

    getMe: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
        credentials: "include",
      }),
      providesTags: [tagTypes.artwork],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,

  useForgotPasswordMutation,
  useVerifyResetPassOtpMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useGetMeQuery,
  useRegisterOrganizationMutation,
  useRegisterNormalUserMutation,
  useVerifyNormalUserMutation,
} = authApi;
