import MainCard from "../MainCard/MainCard";

const MainCardContainer = ({ data, heading }) => {
  return (
    <div>
      {data.map((el) => {
        return (
          <>
            <MainCard image={el.image} />
          </>
        );
      })}
    </div>
  );
};
