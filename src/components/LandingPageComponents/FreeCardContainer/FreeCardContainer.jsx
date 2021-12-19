import styles from "./freeCardContainer.module.css";

const FreeCardContainer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.icon_div}>
            <img src="/icons/gift.svg" alt="giftIcon" />
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
                className={styles.banner}
                src="https://cdn1.epicgames.com/offer/2a09fb19b47f46dfb11ebd382f132a8f/EGS_MarvelsGuardiansoftheGalaxy_EidosMontral_S2_1200x1600-70149d2826b7251033e112dd1427027d?h=854&resize=1&w=640"
                alt="freeCardImages"
              />
              <div className={styles.free}>Free Now</div>
            </div>

            <div className={styles.content}>
              <p className={styles.heading}>Marvel's Guardians of the Galaxy</p>
              <p className={styles.subheading}>Free Now - Dec 19 at 09:30 PM</p>
            </div>
          </div>

          <div className={styles.games_card}>
            <div className={styles.image_div}>
              <img
                className={styles.banner}
                src="https://cdn1.epicgames.com/salesEvent/salesEvent/OW_Epic_PortraitStorefront_1200x1600-99dad6c305834ce163cabb944d909304?h=854&resize=1&w=640"
                alt="freeCardImages"
              />
              <div className={styles.free}>Free Now</div>
            </div>

            <div className={styles.content}>
              <p className={styles.heading}>Outer Wilds Updated Edition</p>
              <p className={styles.subheading}>Free Now - Dec 09 at 11:11 AM</p>
            </div>
          </div>

          <div className={styles.games_card}>
            <div className={styles.image_div}>
              <img
                className={styles.banner}
                src="https://cdn1.epicgames.com/71e66acf6bb34733bd98514ebf9fcaf8/offer/EGS_ObserverSystemRedux_BlooberTeam_S2-1200x1600-9a24fc78d36d88f8a4217ac75e353539.jpg?h=854&resize=1&w=640"
                alt="freeCardImages"
              />
              <div className={styles.coming}>Coming Soon</div>
            </div>

            <div className={styles.content}>
              <p className={styles.heading}>
                Observer - New Edition Coming Soon
              </p>
              <p className={styles.subheading}>Coming soon - 26 Dec</p>
            </div>
          </div>

          <div className={styles.games_card}>
            <div className={styles.image_div}>
              <img
                className={styles.banner}
                src="https://cdn1.epicgames.com/epic/offer/EGS_TheBeardedLadies_CORRUPTION2029_S2-860x1148-86b01bdca8cf7882bae8b27177b40602.jpg?h=854&resize=1&w=640"
                alt="freeCardImages"
              />
              <div className={styles.coming}>Coming Soon</div>
            </div>

            <div className={styles.content}>
              <p className={styles.heading}>Corruption 2029 New Edition</p>
              <p className={styles.subheading}>Coming soon - 11 Jan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeCardContainer;
