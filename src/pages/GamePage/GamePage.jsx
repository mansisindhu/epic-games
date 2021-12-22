import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./gamePage.module.css";
import GameCard from "../../components/GamePageComponents/GameCard";
import Header from "../../components/header";
import SubNavbar from "../../components/SubNavbar";
import LoadingPage from "../../components/LoadingPage";

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

  return (
    <>
      <Header />
      <SubNavbar />
      <div className={styles.main}>
        <div className={styles.gamePage_container}>
          {!gameData.title ? <LoadingPage /> : <GameCard data={gameData} />}
        </div>
      </div>
    </>
  );
};

export default GamePage;
