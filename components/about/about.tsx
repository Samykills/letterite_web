import styles from "./about.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <span className={styles.aboutTitle}>About</span>
      <div className={styles.subContainer}>
        <p className={styles.subContainerText}>
          Letterite is a fun and engaging platform for people to use and revive
          letter writing without them thinking of any trouble for arranging to
          post their letter physically. Letterite will be an opportunity to
          revive those days of personal communication via letters and also bring
          back those days of joy and surprise were receiving letters from your
          loved ones would use to bring a smile on our face and that little
          smile cannot be replaced with an email alert on your phone.
        </p>
      </div>
    </div>
  );
};

export default About;
