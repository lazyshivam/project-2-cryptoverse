import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cryptoNewsHeader = {
    'X-RapidAPI-Key': '18591538f9mshaf949e824fb1412p158ef8jsnee64ae179bae',
    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
};
const baseUrl = "https://contextualwebsearch-websearch-v1.p.rapidapi.com";

const createRequest = (url) => ({ url,headers:cryptoNewsHeader});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, pageSize }) =>
        createRequest(
          `/api/search/NewsSearchAPI?q=${newsCategory}&apageSize=${pageSize}`
        ),
    }),
  }),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
