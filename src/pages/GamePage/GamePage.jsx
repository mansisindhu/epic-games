import styles from "./gamePage.module.css";

import Data from "../../CardData.json";
import GameCard from "../../components/GamePageComponents/GameCard";

const GamePage = () => {
  const GameData = Data;

  return (
    <>
      <div className={styles.main}>
        <div className={styles.gamePage_container}>
          <GameCard data={GameData[0]} />
        </div>
      </div>
    </>
  );
};

export default GamePage;
