import { tagTypes } from "../../tagTypes";
import { baseApi } from "../../api/baseApi";

const subscriptionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMySubscriptions: builder.query({
            query: () => ({
                url: "/subscriptions/my-subscription",
                method: "GET",
                credentials: "include",
            }),
            providesTags: [tagTypes.subscription],
        }),

        getMyListingPackageBuyHistory: builder.query({
            query: () => ({
                url: "/ListingPackage/user/purchases",
                method: "GET",
                credentials: "include",
            }),
        }),

        getUserOwnListingPackage: builder.query({
            query: () => ({
                url: "/ListingPackage/purchases/latest",
                method: "GET",
                credentials: "include",
            }),
        }),

        createSuscribtion: builder.mutation({
            query: (data) => ({
                url: "/subscribers/create-subscriber",
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

        sendMessageToArtist: builder.mutation({
            query: (data) => ({
                url: "/subscribers/send/single-email",
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

        cancelSubscription: builder.mutation({
            query: (id) => ({
                url: `/subscriptions/${id}/cancel`,
                method: "POST",
                credentials: "include",
            }),
            invalidatesTags: [tagTypes.subscription],
        }),

        reactivateSubscription: builder.mutation({
            query: (id) => ({
                url: `/subscriptions/${id}/reactivate`,
                method: "POST",
                credentials: "include",
            }),
            invalidatesTags: [tagTypes.subscription],
        }),
    }),
});

export const {
    useGetMySubscriptionsQuery,
    useGetMyListingPackageBuyHistoryQuery,
    useCreateSuscribtionMutation,
    useSendMessageToArtistMutation,
    useCancelSubscriptionMutation,
    useReactivateSubscriptionMutation,
    useGetUserOwnListingPackageQuery,
} = subscriptionApi;
