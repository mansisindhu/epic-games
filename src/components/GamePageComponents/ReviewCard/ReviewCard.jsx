import styles from "./reviewcard.module.css";
import { BiLinkExternal } from "react-icons/bi";

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
          <div>
            <p>{rating} / 10</p>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.reviewlink}>
            <a href={link}>Read All Reviews</a>

            <BiLinkExternal />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
