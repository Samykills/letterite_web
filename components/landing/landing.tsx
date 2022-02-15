import StoreIcons from "components/storeIcons/storeIcons";
import styles from "./landing.module.css";
const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.boldHeading2}>
          <span className={styles.boldHeading1}>Letter</span> writing made
          easier.
        </p>
        <p className={styles.subHeading}>
          Send and Receive real letters from your friends and family from
          anywhere
        </p>
        <StoreIcons customContainerStyles={styles.storeImageContainer} />
      </div>
      <div className={styles.titlePicture}>
        <img
          src={"/images/introImage.webp"}
          alt={"Intro Image"}
          className={styles.introImage}
        />
      </div>
    </div>
  );
};

export default Landing;
