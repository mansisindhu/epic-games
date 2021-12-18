import styles from "./browseLink.module.css";

const BrowseLink = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image_div}>
          <img
            src="https://cdn2.unrealengine.com/egs-browsebreaker-no-cn-1280x960-1280x960-d86fc25f7c83.png"
            alt="browse"
          />
        </div>

        <div className={styles.content_div}>
          <p className={styles.heading}>Browse</p>
          <p className={styles.subheading}>
            Explore our catalog for your next favorite game!
          </p>
          <button className={styles.btn}>Learn More</button>
        </div>
      </div>
    </>
  );
};

export default BrowseLink;
