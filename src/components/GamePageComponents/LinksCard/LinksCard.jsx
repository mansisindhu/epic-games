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
        <div>
          <FaDiscord />
        </div>

        <div>
          <FaFacebookSquare />
        </div>

        <div>
          <FaGlobeAsia />
        </div>

        <div>
          <FaInstagram />
        </div>

        <div>
          <FaTwitter />
        </div>

        <div>
          <FaYoutube />
        </div>
      </div>
    </>
  );
};

export default LinksCard;
