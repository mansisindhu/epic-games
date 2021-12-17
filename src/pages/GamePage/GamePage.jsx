import styles from "./gamePage.module.css";

import Data from "../../Data.json";
import GameCard from "../../components/GamePageComponents/GameCard";
import Header from "../../components/header";

const GamePage = () => {
  const GameData = Data;
  console.log(GameData);

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.gamePage_container}>
          <GameCard data={GameData[13]} />
        </div>
      </div>
    </>
  );
};

export default GamePage;
