import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// https://newsapi.org/v2/everything?q=tesla&from=2023-01-18&sortBy=publishedAt&apiKey=a730d5245cc247d39526f3dd4cb0e7c4

const cryptoNewsHeader = {
  "X-Api-Key": "a730d5245cc247d39526f3dd4cb0e7c4",
};
const baseUrl = "https://newsapi.org";

const createRequest = (url) => ({ url,headers:cryptoNewsHeader});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, pageSize }) =>
        createRequest(
          `/v2/everything?q=${newsCategory}&sortBy=publishedAt&pageSize=${pageSize}`
        ),
    }),
  }),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
