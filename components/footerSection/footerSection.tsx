import styles from "./footerSection.module.css";
import Link from "next/link";
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
        <div className={styles.linksContainer}>
          <Link href="/termsAndConditions">
            <a className={styles.linkText}>Terms & Condition</a>
          </Link>
          <Link href="/privacyPolicy">
            <a className={styles.linkText}>Privacy Policy</a>
          </Link>
          <span className={styles.linkText}>Contact support@letterite.com</span>
        </div>
      </div>
      <div className={styles.contactContainer}>
        <span className={styles.linkText}>
          ©Letterite 2022. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default FooterSection;
