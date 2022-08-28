// Styled Elements
import { PartnersContainer, PartnersHolder } from "./List.styles";

// MUI Elements
import { Typography } from "@mui/material";

// Redux
import { useGetPartnersQuery } from "../../store/apiSlice";

// Components
import Skeletons from "../Skeletons/SkeletonsView";
import Error from "../Error/Error";
import PartnerView from "../Partner/PartnerView";

// Types
import { ListViewProps } from "../../store/types";

// React Functional Component
import { FC } from "react";

const ListView: FC<ListViewProps> = ({ placeLat, placeLon, distance }) => {
  // Getting the data: partners within distance
  const {
    currentData: partners,
    isLoading,
    isSuccess,
    isError,
  }: any = useGetPartnersQuery({ placeLat, placeLon, distance });

  //console.log("partners", partners?.entities);

  return (
    <PartnersContainer>
      <PartnersHolder>
        <Typography variant="h3">Partners within {distance} km.</Typography>
        {isLoading ? (
          <Skeletons flag={1} width={700} height={90} />
        ) : isError ? (
          <Error error="Network Problem" />
        ) : isSuccess ? (
          partners?.entities && partners.ids.length > 0 ? (
            <>
            {
            Object.values(partners.entities).map(
              (partner: any, index: number) => (
                <PartnerView partner={partner} key={index} />
              )
            )
              }</>) : (
            <Error error={`No partners found within ${distance} km.`} />
          )
        ) : (
          ""
        )}
      </PartnersHolder>
    </PartnersContainer>
  );
};

export default ListView;
