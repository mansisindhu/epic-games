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
          <p>Languages Supported</p>
          <div className={styles.lang}>
            <div className={styles.audio}>
              <p className={styles.lang_heading}>Audio</p>
              <div className={styles.languages}>
                <p>English</p> <p>Portuguese</p> <p> French</p> <p>Chinese</p>
                <p>Spanish</p> <p>Russian</p> <p>Polish</p>
                <p>German</p>
                <p>Japanese</p> <p>Italian</p>
              </div>
            </div>

            <div className={styles.text}>
              <p style={{ fontSize: "12px" }} className={styles.lang_heading}>
                Text
              </p>
              <div className={styles.languages}>
                <p>English</p> <p>Portuguese</p> <p> French</p> <p>Chinese</p>
                <p>Spanish</p> <p>Russian</p> <p>Polish</p>
                <p>German</p>
                <p>Japanese</p> <p>Italian</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.terms}>
          <p>CONDITIONS AND RESTRICTIONS APPLY.</p>
          <div className={styles.info}>
            <p>
              SEE{" "}
              <a
                className={styles.linkweb}
                href="https://www.epicgames.com/store/en-US/p/"
                rel="noreferrer"
              >
                {" "}
                EPIC GAMES{" "}
              </a>
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
