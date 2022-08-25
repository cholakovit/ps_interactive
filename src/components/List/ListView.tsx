// Styled Elements
import { PartnersContainer, PartnersHolder } from "./List.styles";

// Redux
import { useGetPartnersQuery } from "../../store/apiSlice";
import { useAppDispatch } from "../../store/hooks";
import { setCoordinatesAndDistance } from "../../store/partnersSlice";

// Components
import Skeletons from "../Skeletons/SkeletonsView";
import Error from "../Error/Error";
import PartnerView from "../Partner/PartnerView";

// Types
import { PartnerProps, ListViewProps } from "../../store/types";

// React Functional Component
import { FC } from "react";

const ListView: FC<ListViewProps> = ({ placeLat, placeLon, distance }) => {
  const dispatch = useAppDispatch();
  dispatch(setCoordinatesAndDistance({ placeLat, placeLon, distance }));

  // Getting the data: partners within distance
  let { data, isLoading, isSuccess, isError }: any =
    useGetPartnersQuery(placeLat);

  //console.log("params", distance);

  return (
    <PartnersContainer>
      <PartnersHolder>
        {isLoading ? (
          <Skeletons flag={1} width={700} height={60} />
        ) : isError ? (
          <Error error="Network Problem" />
        ) : isSuccess ? (
          data &&
          data?.map((partner: PartnerProps, index: number) => (
            <PartnerView partner={partner} key={index} />
          ))
        ) : (
          ""
        )}
      </PartnersHolder>
    </PartnersContainer>
  );
};

export default ListView;
