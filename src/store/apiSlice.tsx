// Redux toolkit
//import { current } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

// Types
import { PartnersProps, PartnerProps } from "./types";

const partnersAdapter = createEntityAdapter({
  selectId: (e: any) => e.partner_id,
});

// This function takes in latitude and longitude of two location and returns the distance between them (in km)
export const distanceBetweenTwoPoints = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const R: number = 6371; // Earth radius - km
  
  let dLat = toRad(lat2 - lat1);
  let dLon = toRad(lon2 - lon1);
  let lat = toRad(lat1);
  let lon = toRad(lon1);

  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat) * Math.cos(lon);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  
  return d;
};

// Converts numeric degrees to radians
export const toRad = (value: number) => {
  // The Math.PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159
  return (value * Math.PI) / 180;
};

const initialState = partnersAdapter.getInitialState();

export const psApi = createApi({
  reducerPath: "psApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_PARTNERS }),
  tagTypes: ["Partners"],
  endpoints: (builder) => ({
    getPartners: builder.query({
      query: () => `/partners/`,
      transformResponse: (partners: PartnersProps, meta, arg) => {
        // The returned array with all partners within 100km.
        let within100: object[] = [];

        Object.values(partners).map((partner: PartnerProps) => {
          // The toFixed() method formats a number using fixed-point notation.
          const distance = distanceBetweenTwoPoints(
            partner.latitude,
            partner.longitude,
            Number(arg.placeLat),
            Number(arg.placeLon)
          ).toFixed(1);

          // Check partner within distance and add pic and distance to the object
          if (Number(distance) < arg.distance) {
            partner.pic = `${Math.floor(Math.random() * 4)}.jpg`;
            partner.distance = distance;
            within100.push(partner);
          }
        });

        within100.sort((a: any, b: any) => a.partner_id - b.partner_id);
        return partnersAdapter.setAll(initialState, within100);
      },
      providesTags: ["Partners"],
    }),
  }),
});

export const { useGetPartnersQuery } = psApi;

// returns the query result object
export const selectPartnersResult = psApi.endpoints.getPartners.select("");

// Creates memoized selector
const selectPartnersData: any = createSelector(
  selectPartnersResult,
  (partnersResult) => partnersResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllPartners,
  // Pass in a selector that returns the posts slice of state
} = partnersAdapter.getSelectors(
  (state) => selectPartnersData(state) ?? initialState
);
