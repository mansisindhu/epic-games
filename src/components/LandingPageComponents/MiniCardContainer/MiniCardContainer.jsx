import { Link } from "react-router-dom";

import styles from "./mini-card-container.module.css";
import MiniCard from "../MiniCard";

const MiniCardContainer = ({ data, heading }) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <p className={styles.cont_heading}>{heading}</p>

          {data.map((el, i) => {
            return (
              <Link key={i} to={`/games/${el._id}`}>
                <div className={styles.card}>
                  <MiniCard
                    banner={el.cardImage}
                    title={el.title}
                    price={el.price}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MiniCardContainer;
