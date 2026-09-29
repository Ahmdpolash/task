import { type } from "os";
import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../tagTypes";
import Cookies from "js-cookie";


const token = Cookies.get("token")

const planApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllPlan: builder.query({
            query: () => ({
                url: "/plans",
                method: "GET",
                credentials: "include",
            }),
            providesTags: [tagTypes.plan],
        }),

        updatePlan: builder.mutation({
            query: (data) => ({
                url: `/plans/${data.id}`,
                method: "PATCH",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: [tagTypes.plan],
        }),

        buySubscription: builder.mutation({
            query: (data) => ({
                url: "/subscriptions/create-subscription",
                method: "POST",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: [tagTypes.subscription],
        }),

        getMySubcriptoin: builder.query({
            query: () => ({
                url: "/subscriptions/my-subscription",
                method: "GET",
                credentials: "include",
            }),
            providesTags: [tagTypes.subscription],
        }),

        createStripePaymentMethod: builder.mutation({
            queryFn: async (data: any) => {
                try {
                    const myHeaders = new Headers();
                    myHeaders.append(
                        "Content-Type",
                        "application/x-www-form-urlencoded",
                    );
                    myHeaders.append(
                        "Authorization",
                        `Bearer ${process.env.NEXT_PUCLIC_STRIPE_SECRET_KEY}`,
                    );

                    const urlencoded = new URLSearchParams();
                    urlencoded.append("card[number]", data.number);
                    urlencoded.append("card[exp_month]", data.exp_month);
                    urlencoded.append("card[exp_year]", data.exp_year);
                    urlencoded.append("card[cvc]", data.cvc);
                    urlencoded.append("type", "card");

                    const response = await fetch(
                        "https://api.stripe.com/v1/payment_methods",
                        {
                            method: "POST",
                            headers: myHeaders,
                            body: urlencoded,
                            redirect: "follow",
                        },
                    );

                    const result = await response.json();
                    if (result.error) return { error: result.error };
                    return { data: result };
                } catch (error: any) {
                    return { error: { message: error.message } };
                }
            },
        }),

        confirmPayment: builder.mutation({
            query: (data) => ({
                url: "/subscriptions/confirm-payment",
                method: "POST",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: [tagTypes.subscription],
        }),
    }),
});

export const {
    useGetAllPlanQuery,
    useUpdatePlanMutation,
    useBuySubscriptionMutation,
    useGetMySubcriptoinQuery,
    useLazyGetMySubcriptoinQuery,
    useCreateStripePaymentMethodMutation,
    useConfirmPaymentMutation,
} = planApi;
