import TopCategorySlider from "../../TopCategorySlider";
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
      <TopCategorySlider text="Popular Genre" />
      <div className={styles.cards}>
        <Card title="Action Games" img="/genre/action_games.svg" />
        <Card title="Casual Games" img="/genre/casual_games.svg" />
        <Card title="Indie" img="/genre/indie_games.svg" />
        <Card title="Multiplayer" img="/genre/multiplayer_games.svg" />
        <Card title="Strategy" img="/genre/open_games.svg" />
      </div>
    </div>
  );
};
export default PopularGenre;
