import ReviewCard from "../ReviewCard";
import styles from "./reviewCardContainer.module.css";

const ReviewCardContainer = ({ data }) => {
  return (
    <>
      <div className={styles.reviewCardContainer}>
        <div className={styles.container}>
          {data.map((e) => {
            return (
              <>
                <div className={styles.card}>
                  <ReviewCard
                    organisation={e.organisation}
                    author={e.author}
                    rating={e.rating}
                    description={e.description}
                    link={e.link}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ReviewCardContainer;
