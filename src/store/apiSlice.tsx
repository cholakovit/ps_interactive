// Redux toolkit
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Types
//import { PartnersProps } from './types'

export const distanceBetweenTwoPoints = (lat1: any, lon1: any, lat2: any, lon2: any) => {
  const R: number = 6371 // Earth radius - km
  //console.log('params', lon2)
  let dLat = toRad(lat2 - lat1)
  let dLon = toRad(lon2 - lon1)
  let lat = toRad(lat1)
  let lon = toRad(lon1)

  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat) * Math.cos(lon)
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  let d = R * c

  return d

}

export const toRad = (value: number) => {
  return value * Math.PI / 180
}

export const psApi = createApi({
  reducerPath: "psApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_PARTNERS }),
  tagTypes: ["Partners"],
  endpoints: (builder) => ({
    getPartners: builder.query({
      query: () => '',
      transformResponse: (partners: any) => {
        //console.log('responseData', partners)
        let within100 = Array()
        partners?.map((partner: any) => {
          //console.log('partner', process.env.REACT_APP_PLACE_LON)
          const distance = distanceBetweenTwoPoints(partner.latitude, partner.longitude, 
            process.env.REACT_APP_PLACE_LAT, process.env.REACT_APP_PLACE_LON).toFixed(1)

            //console.log(Math.floor(Math.random() * 4))

          if(Number(distance) < 100) {
            partner.pic = `${Math.floor(Math.random() * 4)}.jpg`
            partner.distance = distance
            within100.push(partner)
          }

          //console.log('distance', distance)
        })



        // Object.entries(partners).map((partner: any) => {
        //   console.log('partner', partner)
        //   distanceBetweenTwoPoints(partner.latitude, partner.longitude, 
        //     process.env.REACT_APP_PLACE_LAT, process.env.REACT_APP_PLACE_LON)
        // })

        

        return within100;
      },
      providesTags: ["Partners"],
    }),
  }),
});

export const { useGetPartnersQuery } = psApi;