import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../tagTypes";

const listingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllListing: builder.query({
      query: () => ({
        url: `/ListingPackage`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: [tagTypes.listing],
    }),

    createListing: builder.mutation({
      query: (data) => ({
        url: "/ListingPackage",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: [tagTypes.listing],
    }),

    updateListing: builder.mutation({
      query: (data) => ({
        url: `/ListingPackage/${data.id}`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: [tagTypes.listing],
    }),

    deleteListing: builder.mutation({
      query: (id) => ({
        url: `/ListingPackage/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: [tagTypes.listing],
    }),

    buyListing: builder.mutation({
      query: (data) => ({
        url: "/ListingPackage/package/purchase",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: [tagTypes.listing],
    }),

    getUserPurchaseListing: builder.query({
      query: (option) => ({
        url: "/ListingPackage/user/purchases",
        method: "GET",
        credentials: "include",
        params: option,
      }),
      providesTags: [tagTypes.listing],
    }),
  }),
});

export const {
  useGetAllListingQuery,
  useCreateListingMutation,
  useUpdateListingMutation,
  useDeleteListingMutation,
  useBuyListingMutation,
  useGetUserPurchaseListingQuery,
} = listingApi;
