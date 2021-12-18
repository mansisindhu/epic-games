import styles from "./linksCard.module.css";
import {
  FaDiscord,
  FaFacebookSquare,
  FaGlobeAsia,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const LinksCard = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.icon}>
          <FaDiscord />
        </div>

        <div className={styles.icon}>
          <FaFacebookSquare />
        </div>

        <div className={styles.icon}>
          <FaGlobeAsia />
        </div>

        <div className={styles.icon}>
          <FaInstagram />
        </div>

        <div className={styles.icon}>
          <FaTwitter />
        </div>

        <div className={styles.icon}>
          <FaYoutube />
        </div>
      </div>
    </>
  );
};

export default LinksCard;
