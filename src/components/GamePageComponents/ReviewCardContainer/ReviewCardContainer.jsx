import ReviewCard from "../ReviewCard";
import styles from "./reviewCardContainer.module.css";

const ReviewCardContainer = ({ data }) => {
  return (
    <>
      <div className={styles.reviewCardContainer}>
        <p>Ratings</p>
        <div className={styles.container}>
          {data.map((e, i) => {
            return (
              <div key={i} className={styles.card}>
                <ReviewCard
                  organisation={e.organisation}
                  author={e.author}
                  rating={e.rating}
                  description={e.description}
                  link={e.link}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ReviewCardContainer;
