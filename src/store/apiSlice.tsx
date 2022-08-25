// Redux toolkit
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Types
import { PartnersProps, PartnerProps } from './types'

// This function takes in latitude and longitude of two location and returns the distance between them (in km)
export const distanceBetweenTwoPoints = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R: number = 6371 // Earth radius - km

  let dLat = toRad(lat2 - lat1)
  let dLon = toRad(lon2 - lon1)
  let lat = toRad(lat1)
  let lon = toRad(lon1)

  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat) * Math.cos(lon)
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  let d = R * c

  return d

}

// Converts numeric degrees to radians
export const toRad = (value: number) => {
  // The Math.PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159
  return value * Math.PI / 180
}

export const psApi = createApi({
  reducerPath: "psApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_PARTNERS }),
  tagTypes: ["Partners"],
  endpoints: (builder) => ({
    getPartners: builder.query({
      query: () => '',
      transformResponse: (partners: PartnersProps) => {

        // The returned array with all partners within 100km.
        let within100: object[] = []
        
        Object.values(partners).map((partner: PartnerProps) => {

          // The toFixed() method formats a number using fixed-point notation.
          const distance = distanceBetweenTwoPoints(partner.latitude, partner.longitude, 
            Number(process.env.REACT_APP_PLACE_LAT), Number(process.env.REACT_APP_PLACE_LON)).toFixed(1)

          // Check partner within distance and add pic and distance to the object
          if(Number(distance) < Number(process.env.REACT_APP_REQUIRED_DISTANCE)) {
            partner.pic = `${Math.floor(Math.random() * 4)}.jpg`
            partner.distance = distance
            within100.push(partner)
          }

          return ''
        })

        return within100;
      },
      providesTags: ["Partners"],
    }),
  }),
});

export const { useGetPartnersQuery } = psApi;