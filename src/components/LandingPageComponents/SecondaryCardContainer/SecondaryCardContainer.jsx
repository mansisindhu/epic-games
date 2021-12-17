import SecondaryCard from "../SecondaryCard/SecondaryCard";
import styles from "./secondaryCardContainer.module.css";

const SecondaryCardContainer = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className={styles.container}>
        {data.map((el, i) => {
          return (
            <>
              <div key={i} className={styles.card}>
                <SecondaryCard
                  image={el.thumbnail}
                  title={el.title}
                  description={el.description}
                  discount={el.price.discount}
                  price={el.price.mainPrice}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SecondaryCardContainer;
