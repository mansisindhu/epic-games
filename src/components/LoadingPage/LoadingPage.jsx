import styles from "./loading.module.css";

const LoadingPage = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.message_container}>
          <div className={styles.loading}></div>
          <h1>Loading...</h1>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
