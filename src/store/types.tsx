// For the rentals slice
export type InitialStateType = {};
  
// For the Theme
export type colorModeProps = {
  toggleColorMode?: any;
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
    latitude: string
    longitude: string
};

// For Partners
export type PartnersProps = {
  partner: PartnerProps
}

  
