import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../tagTypes";

const opencallsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOpenCalls: builder.query({
      query: ({
        page = 1,
        limit = 10,
        searchTerm = "",
     
      }) => ({
        url: `/opencalls/published`,
        method: "GET",
        credentials: "include",
        params: {
          page,
          limit,
          searchTerm,
        },
      }),
      providesTags: [tagTypes.calls],
    }),
    getSingleOpenCall: builder.query({
      query: ({ id }) => ({
        url: `/opencalls/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: [tagTypes.calls],
    }),

    createOpenCall: builder.mutation({
      query: (data) => ({
        url: "/opencalls/create",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: [tagTypes.calls],
    }),

    getSingleOrganization: builder.query({
      query: ({ id }) => ({
        url: `/opencalls/get/organization/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),

    updateOpenCall: builder.mutation({
      query: ({ id, formData  }) => ({
        url: `/opencalls/${id}`,
        method: "PUT",
        body: formData ,
        credentials: "include",
      }),
      invalidatesTags: [tagTypes.calls],
    }),
  }),
});

export const {
  useGetAllOpenCallsQuery,
  useCreateOpenCallMutation,
  useGetSingleOpenCallQuery,
  useGetSingleOrganizationQuery,
  useUpdateOpenCallMutation,
} = opencallsApi;
