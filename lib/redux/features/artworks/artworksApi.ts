import { get } from "http";
import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../tagTypes";

const artworkApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getArtworks: builder.query({
      query: () => ({
        url: "/artworks",
        method: "GET",
      }),
      providesTags: [tagTypes.artwork],
    }),

    getSingleArtwork: builder.query({
      query: ({ id }) => ({
        url: `/artworks/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.artwork],
    }),

    createArtwork: builder.mutation({
      query: (data) => ({
        url: "/artworks/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.artwork],
    }),

    getMyAllArtworks: builder.query({
      query: ({ page = 1, limit = 8 }) => ({
        // url: "/artworks/my-art/work",
        url: `/artworks/my-art/work?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: [tagTypes.artwork],
    }),
    deleteMyArtwork: builder.mutation({
      query: (id) => ({
        url: `/artworks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.artwork],
    }),
    updateArtwork: builder.mutation({
      query: ({ id, data }) => ({
        url: `/artworks/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [tagTypes.artwork],
    }),
  }),
});

export const {
  useGetArtworksQuery,
  useGetSingleArtworkQuery,
  useCreateArtworkMutation,
  useGetMyAllArtworksQuery,
  useDeleteMyArtworkMutation,
  useUpdateArtworkMutation,
} = artworkApi;
