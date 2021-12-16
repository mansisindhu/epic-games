import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import styles from "./popular-genre.module.css";

const Card = ({ title, img }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={img} alt={title} />
      <p className={styles.card_text}>{title}</p>
    </div>
  );
};

const PopularGenre = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p className={styles.heading}>Popular Genres</p>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <RiArrowLeftSLine />
          </div>
          <div className={styles.icon}>
            <RiArrowRightSLine />
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <Card title="Action Games" img="/genre/action_games.svg" />
        <Card title="Casual Games" img="/genre/casual_games.svg" />
        <Card title="Indie" img="/genre/indie_games.svg" />
        <Card title="Multiplayer" img="/genre/multiplayer_games.svg" />
        <Card title="Action Games" img="/genre/action_games.svg" />
      </div>
    </div>
  );
};
export default PopularGenre;
