import styles from "./specifications.module.css";

const Specifications = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.heading}>
          <p className={styles.text}>Windows</p>
        </div>

        <div className={styles.content}>
          <div className={styles.minimum}>
            <p className={styles.details_heading}>Minimum</p>

            <div>
              <p className={styles.content_title}>OS</p>
              <p>64-bit Windows 10</p>
            </div>

            <div>
              <p className={styles.content_title}>Processor</p>
              <p>AMD Ryzen 5 1600, Core i5 6600K</p>
            </div>

            <div>
              <p className={styles.content_title}>Memory</p>
              <p>8 GB</p>
            </div>

            <div>
              <p className={styles.content_title}>Storage</p>
              <p>100 GB</p>
            </div>

            <div>
              <p className={styles.content_title}>Direct X</p>
              <p>12</p>
            </div>

            <div>
              <p className={styles.content_title}>Graphics</p>
              <p>AMD Radeon RX 560, Nvidia GeForce GTX 1050 Ti</p>
            </div>
          </div>

          <div className={styles.recommended}>
            <p className={styles.details_heading}>Recommended</p>

            <div>
              <p className={styles.content_title}>OS</p>
              <p>64-bit Windows 10</p>
            </div>

            <div>
              <p className={styles.content_title}>Processor</p>
              <p>AMD Ryzen 5 1600, Core i5 6600K</p>
            </div>

            <div>
              <p className={styles.content_title}>Memory</p>
              <p>16 GB</p>
            </div>

            <div>
              <p className={styles.content_title}>Storage</p>
              <p>100 GB + 37 GB HD</p>
            </div>

            <div>
              <p className={styles.content_title}>Direct X</p>
              <p>12</p>
            </div>

            <div>
              <p className={styles.content_title}>Graphics</p>
              <p>AMD Radeon RX 560, Nvidia GeForce GTX 1050 Ti</p>
            </div>
          </div>
        </div>

        <div className={styles.lang_div}>
          <p>Languages</p>
          <div className={styles.lang}>
            <p>
              AUDIO: English, French, German, Russian, Portuguese (Brazilian),
              Spanish (LATAM), Japanese // + Spanish in DLCs only
            </p>
            TEXT: English, French, Italian, German, Spanish, Polish, Russian,
            Portuguese (Brazilian), Spanish (LATAM), Japanese, Korean, Chinese
            (Traditional), Chinese (Simplified), Arabic, Thailand
            <p></p>
          </div>
        </div>

        <div className={styles.terms}>
          <p>*CONDITIONS AND RESTRICTIONS APPLY.</p>
          <div className={styles.info}>
            <p>
              SEE
              https://www.ea.com/games/battlefield/battlefield-2042/disclaimers
              FOR DETAILS. NO WEAPON, VEHICLE OR GEAR MANUFACTURER IS AFFILIATED
              WITH OR HAS SPONSORED OR ENDORSED THIS GAME.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specifications;
