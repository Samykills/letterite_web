import styles from "./footerSection.module.css";
const FooterSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.detailsContainer}>
        <div className={styles.logoContainer}>
          <img
            src={"/icons/letteriteHeartIconWhite.webp"}
            alt={"white letterite heart icon"}
            className={styles.letteriteHeartIcon}
          />
          <span className={styles.logoTitle}>Letterite</span>
        </div>
        <p className={styles.copyrightTextContainer}>
          ©Letterite 2022. All rights reserved
        </p>
      </div>
      <div className={styles.contactContainer}>
        <p className={styles.contactEmailText}>
          <span className={styles.contactText}>Contact</span>{" "}
          support@letterite.com
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
