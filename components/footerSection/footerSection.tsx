import styles from "./footerSection.module.css";
const FooterSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.detailsContainer}>
        <div className={styles.logoContainer}>
          <img
            src={"/icons/letteriteHeartIconWhite.png"}
            alt={"letterite heart icon"}
            className={styles.letteriteHeartIcon}
          />
          <span className={styles.logoTitle}>Letterite</span>
        </div>
        <div className={styles.detailsTextContainer}>
          <span className={styles.detailsText}>
            Letterite lets you send and receive real letters from your friends
            and family from anywhere
          </span>
        </div>
        <p className={styles.copyrightTextContainer}>
          ©Letterite 2022. All rights reserved
        </p>
      </div>
      <div className={styles.contactContainer}>
        <p className={styles.contactEmailText}>
          <span className={styles.contactText}>Contact</span>{" "}
          hello@letterite.com
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
