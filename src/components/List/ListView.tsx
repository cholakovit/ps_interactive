import React from 'react'

// Styled Elements
import { PartnersContainer, PartnersHolder } from './List.styles';

// MUI Elements
//import { List } from '@mui/material';

// Redux
import { useGetPartnersQuery } from "../../store/apiSlice";

// Components
import Skeletons from "../Skeletons/SkeletonsView";
import Error from "../Error/Error";
import PartnerView from '../Partner/PartnerView';


const ListView = () => {

  let { data, isLoading, isSuccess, isError }: any = useGetPartnersQuery('');

  console.log('data', data)

  return (
    <PartnersContainer>
      <PartnersHolder>
        {isLoading ? (
            <Skeletons flag={1} width={1100} height={200} />
          ) : isError ? (
            <Error error="Network Problem" />
          ) : isSuccess ? (
              
              data && data?.map((partner: any, index: number) => (
                <PartnerView partner={partner} key={index} />
              ))

          ) : (
            ""
        )}
      </PartnersHolder>
    </PartnersContainer>
  )
}

export default ListView

