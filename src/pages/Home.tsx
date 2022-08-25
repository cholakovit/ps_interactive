// Components
import ListView from "../components/List/ListView";

const Home = () => {
  const placeLat = 42.6665921;
  const placeLon = 23.351723;
  const distance = 100;

  return (
    <ListView placeLat={placeLat} placeLon={placeLon} distance={distance} />
  );
};

export default Home;
