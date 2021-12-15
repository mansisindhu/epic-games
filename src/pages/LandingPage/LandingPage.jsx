import MainCardContainer from "../../components/LandingPageComponents/MainCardContainer/MainCardContainer";
import Data from "../../Data.json";

const LandingPage = () => {
  const sale = Data;

  return (
    <>
      <h1>Games on Sale </h1>
      <MainCardContainer data={sale} />
    </>
  );
};

export default LandingPage;
