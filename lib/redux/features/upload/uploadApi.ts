import { baseApi } from "../../api/baseApi";

const uploadApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        uploadImages: builder.mutation<{ success: boolean; message: string; images: string[] }, FormData>({
            query: (data) => ({
                url: "/uploads/images",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useUploadImagesMutation } = uploadApi;
