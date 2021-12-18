import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./gamePage.module.css";
import GameCard from "../../components/GamePageComponents/GameCard";
import Header from "../../components/header";

const GamePage = () => {
  const { id } = useParams();
  const [gameData, setGameData] = useState({});

  const getGameData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/games/${id}`,
        { withCredentials: true }
      );

      setGameData({ ...data });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGameData();
  }, []);

  if (!gameData.title) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.gamePage_container}>
          <GameCard data={gameData} />
        </div>
      </div>
    </>
  );
};

export default GamePage;
