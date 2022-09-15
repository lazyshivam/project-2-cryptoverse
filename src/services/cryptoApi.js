import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
 
const cryptoApiHeader={
    'X-RapidAPI-Key': '39b48fd2demshe5b3441d3e8170dp17328ejsn434ac11a856c',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  
}
const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest=(url)=>({url,headers:cryptoApiHeader});
export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory:builder.query({ 
            query:({coinId,timePeriod})=>createRequest(`/coin/${coinId}/history?referenceCurrencyUuid/${timePeriod}`),
        })
        // referenceCurrencyUuid
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
}=cryptoApi;