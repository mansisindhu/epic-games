import styles from "./reviewcard.module.css";

const ReviewCard = (props) => {
  const { author, organisation, rating, description, link } = props;

  return (
    <>
      <div className={styles.main}>
        <div className={styles.name_div}>
          <p>{organisation}</p>
          <p className={styles.author}>by {author}</p>
        </div>

        <div className={styles.content}>
          <p>{rating} / 10</p>
          <p className={styles.description}>{description}</p>
          <div className={styles.reviewlink}>
            <a href={link}>Read All Reviews</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
