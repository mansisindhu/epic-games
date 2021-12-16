import styles from "./freeCardContainer.module.css";

const FreeCardContainer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.icon_div}>
            <img src="./icons/gift.svg" alt="giftIcon" />
            <p>Free Games</p>
          </div>

          <div>
            <button className={styles.btn}>VIEW MORE</button>
          </div>
        </div>

        <div className={styles.lower}>
          <div className={styles.games_card}>
            <div className={styles.image_div}>
              <img
                src="https://cdn1.epicgames.com/offer/b6b2ef0cc19a4adaaa1cf6c7ed000dfa/EGS_GodfallChallengerEdition_CounterplayGames_Editions_S1_2560x1440-2541e6e7783e8a65817c51c0ad856c19_2560x1440-2541e6e7783e8a65817c51c0ad856c19?h=480&resize=1&w=854"
                alt=""
              />
              <div className={styles.free}>FREE NOW</div>
            </div>

            <div className={styles.content}>
              <p className={styles.heading}>Godfall Challenger Edition</p>
              <p className={styles.subheading}>Free Now - Dec 16 at 09:30 PM</p>
            </div>
          </div>

          <div className={styles.games_card}>
            <div className={styles.image_div}>
              <img
                src="https://cdn1.epicgames.com/offer/b6b2ef0cc19a4adaaa1cf6c7ed000dfa/EGS_GodfallChallengerEdition_CounterplayGames_Editions_S1_2560x1440-2541e6e7783e8a65817c51c0ad856c19_2560x1440-2541e6e7783e8a65817c51c0ad856c19?h=480&resize=1&w=854"
                alt=""
              />
              <div className={styles.free}>FREE NOW</div>
            </div>

            <div className={styles.content}>
              <p className={styles.heading}>Godfall Challenger Edition</p>
              <p className={styles.subheading}>Free Now - Dec 16 at 09:30 PM</p>
            </div>
          </div>

          <div className={styles.games_card}>
            <div className={styles.image_div}>
              <img
                src="https://cdn1.epicgames.com/offer/b6b2ef0cc19a4adaaa1cf6c7ed000dfa/EGS_GodfallChallengerEdition_CounterplayGames_Editions_S1_2560x1440-2541e6e7783e8a65817c51c0ad856c19_2560x1440-2541e6e7783e8a65817c51c0ad856c19?h=480&resize=1&w=854"
                alt=""
              />
              <div className={styles.free}>FREE NOW</div>
            </div>

            <div className={styles.content}>
              <p className={styles.heading}>Godfall Challenger Edition</p>
              <p className={styles.subheading}>Free Now - Dec 16 at 09:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeCardContainer;
