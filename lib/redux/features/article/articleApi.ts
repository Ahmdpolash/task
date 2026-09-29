import { baseApi } from "../../api/baseApi";

const articleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: ({ page = 1, limit = 10, searchTerm = "" }) => ({
        url: "/article",
        method: "GET",
        params: {
          page,
          limit,
          searchTerm,
        },
      }),
    }),
    getSingleArticle: builder.query({
      query: ({id}) => ({
        url: `/article/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetArticlesQuery, useGetSingleArticleQuery } = articleApi;
