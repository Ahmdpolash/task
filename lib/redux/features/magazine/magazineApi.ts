import { baseApi } from "../../api/baseApi";

const eventApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMagazine: builder.query({
      query: ({ page = 1, limit = 10, searchTerm = "" }) => ({
        url: "/magazines",
        method: "GET",
        credentials: "include",
        params: {
          page,
          limit,
          searchTerm,
        },
      }),
    }),
    getSingleMagazine: builder.query({
      query: ({ id }) => ({
        url: `/magazines/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    getPublicNewVoices: builder.query({
      query: ({ page = 1, limit = 10 }) => ({
        url: "/new-voices/public",
        method: "GET",
        params: { page, limit },
      }),
    }),
    getSingleNewVoice: builder.query({
      query: (id) => ({
        url: `/new-voices/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllMagazineQuery,
  useGetSingleMagazineQuery,
  useGetPublicNewVoicesQuery,
  useGetSingleNewVoiceQuery,
} = eventApi;
