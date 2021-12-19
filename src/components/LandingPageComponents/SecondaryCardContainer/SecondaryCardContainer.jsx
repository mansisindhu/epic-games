import { Link } from "react-router-dom";
import SecondaryCard from "../SecondaryCard/SecondaryCard";
import styles from "./secondaryCardContainer.module.css";

const SecondaryCardContainer = ({ data }) => {
  return (
    <>
      <div className={styles.container}>
        {data.map((el, i) => {
          return (
            <Link key={i} to={`/games/${el?._id}`}>
              <div className={styles.card}>
                <SecondaryCard
                  image={el?.thumbnail}
                  title={el?.title}
                  description={el?.description}
                  price={el?.price}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SecondaryCardContainer;
