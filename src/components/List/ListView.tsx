// Styled Elements
import { PartnersContainer, PartnersHolder } from "./List.styles";

// Redux
import { useGetPartnersQuery } from "../../store/apiSlice";

// Components
import Skeletons from "../Skeletons/SkeletonsView";
import Error from "../Error/Error";
import PartnerView from "../Partner/PartnerView";

// Types
import { PartnerProps } from "../../store/types";

const ListView = () => {
  // Getting the data: partners within distance
  let { data, isLoading, isSuccess, isError }: any = useGetPartnersQuery("");

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
