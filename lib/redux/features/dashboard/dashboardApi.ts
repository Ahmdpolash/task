import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../tagTypes";

const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboard: builder.query({
      query: () => ({
        url: "/products/dishboard/overview",
        method: "GET",
        credentials: "include",
      }),
      providesTags: [tagTypes.dashboard],
    }),
  }),
});

export const { useGetDashboardQuery } = dashboardApi;
