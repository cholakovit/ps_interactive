// for the rentals slice
export type InitialStateType = {
  placeLat: number | string
  placeLon: number | string
  distance: number | string
  //status: string;
  //error: string | null | undefined
};

// For the Theme
export type colorModeProps = {
  toggleColorMode?: () => void
};
  
// For Errors
export type errorProps = {
  error: string;
};

// For the Skeleton
export type SkeletonProps = {
  flag: number;
  width: number;
  height: number;
};

// For Partner
export type PartnerProps = {
    partner_id: number
    name: string
    pic: string
    latitude: number
    longitude: number
    distance: number | string
};

// For Partners
export type PartnersProps = {
  partner: PartnerProps
}

export type ListViewProps = {
  placeLat: number
  placeLon: number
  distance: number
}