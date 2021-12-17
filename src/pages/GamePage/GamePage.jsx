import styles from "./gamePage.module.css";

import Data from "../../Data.json";
import GameCard from "../../components/GamePageComponents/GameCard";

const GamePage = () => {
  const GameData = Data;
  console.log(GameData);

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
