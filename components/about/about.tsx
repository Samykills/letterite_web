import styles from "./about.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <span className={styles.aboutTitle}>About</span>
      <div className={styles.subContainer}>
        <p className={styles.subContainerText}>
          Letterite is an opportunity to revive those days of personal
          communication via letters. Bring back those days of joy and surprise
          were receiving letters from your loved ones would use to bring a smile
          on our face, that little smile cannot be replaced with an email alert
          on your phone.
        </p>
      </div>
    </div>
  );
};

export default About;
