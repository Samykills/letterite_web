import styles from "./landing.module.css";
const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.boldHeading2}>
          <span className={styles.boldHeading1}>Letter</span> writing made
          easier.
        </p>
        <span className={styles.subHeading}>
          Send and Receive real letters from your friends and family from
          anywhere
        </span>
      </div>
      <div className={styles.titlePicture}>
        <img
          src={"/images/introImage.png"}
          alt={"Intro Image"}
          className={styles.introImage}
        />
      </div>
    </div>
  );
};

export default Landing;
