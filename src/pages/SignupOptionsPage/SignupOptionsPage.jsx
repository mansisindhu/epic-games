import styles from "./signup-options.module.css";

const SignupOptionsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src="/icons/Epic_games_white.svg" alt="" />
      </div>

      <p className={styles.heading}>
        CHOOSE HOW TO SIGN IN TO YOUR EPIC ACCOUNT
      </p>

      <div className={styles.options}>
        <div className={styles.option}>
          <img src="/social-icons/Epic_Games.svg" alt="epic-games" />
          <p className={styles.text}>SIGN IN WITH EPIC GAMES</p>
        </div>
        <div className={styles.option}>
          <img src="/social-icons/Facebook.svg" />
          <p className={styles.text}>SIGN IN WITH FACEBOOK</p>
        </div>
        <div className={[styles.option, styles.abled].join(" ")}>
          <img src="/social-icons/Google.svg" />
          <p className={styles.text}>SIGN IN WITH GOOGLE</p>
        </div>
        <div className={styles.option}>
          <img src="/social-icons/Nintendo.svg" />
          <p className={styles.text}>SIGN IN WITH NINTENDO ACCOUNT</p>
        </div>
        <div className={styles.option}>
          <img src="/social-icons/Xbox.svg" />
          <p className={styles.text}>SIGN IN WITH XBOX LIVE</p>
        </div>
        <div className={styles.option}>
          <img src="/social-icons/Playstation_Network.svg" />
          <p className={styles.text}>SIGN IN WITH PLAYSTATION NETWORK</p>
        </div>
        <div className={styles.option}>
          <img src="/social-icons/Apple.svg" />
          <p className={styles.text}>SIGN IN WITH APPLE</p>
        </div>
        <div className={styles.option}>
          <img src="/social-icons/Steam.svg" />
          <p className={styles.text}>SIGN IN WITH STEAM</p>
        </div>
      </div>
      <p className={styles.footer}>
        Don&#39;t have an Epic Games account?{" "}
        <span className={styles.underline}>Sign Up</span>
      </p>
    </div>
  );
};

export default SignupOptionsPage;
