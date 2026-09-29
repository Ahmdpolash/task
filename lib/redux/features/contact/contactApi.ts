import { baseApi } from "../../api/baseApi";

const contactApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        sendEmail: builder.mutation({
            query: (data) => ({
                url: "/contacts/send-email",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useSendEmailMutation } = contactApi;
