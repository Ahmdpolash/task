import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../tagTypes";

const eventApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllEvent: builder.query({
      query: ({ page = 1, limit = 10, searchTerm = "" }) => ({
        url: "/events/published",
        method: "GET",
        credentials: "include",
        params: {
          page,
          limit,
          searchTerm,
        },
      }),
      providesTags: [tagTypes.event],
    }),
    getSingleEvent: builder.query({
      query: ({ id }) => ({
        url: `/events/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: [tagTypes.event],
    }),

    createEvent: builder.mutation({
      query: (data) => ({
        url: "/events/create",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: [tagTypes.event],
    }),

    getSingleUserEvent: builder.query({
      query: ({ id }) => ({
        url: `/events/get/organization/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: [tagTypes.event],
    }),

    updateEvent: builder.mutation({
      query: ({ id, data }) => ({
        url: `/events/${id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: [tagTypes.event],
    }),
  }),
});

export const {
  useGetAllEventQuery,
  useGetSingleEventQuery,
  useCreateEventMutation,
  useGetSingleUserEventQuery,
  useUpdateEventMutation,
} = eventApi;
