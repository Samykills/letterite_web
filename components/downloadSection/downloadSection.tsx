import StoreIcons from "components/storeIcons/storeIcons";
import styles from "./downloadSection.module.css";

const DownloadSection = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.downloadTextContainer}>
          <p className={styles.downloadTitle}>
            <span className={styles.downloadText}>Download</span> our{" "}
            <span className={styles.divider}>mobile</span> app
          </p>
          <p className={styles.downloadSubtitle}>
            Our Letter posting app allow you to exchange real letters with your
            loved ones in a fun way
          </p>
          <StoreIcons
            customContainerStyles={styles.storeImageContainerDesktop}
          />
        </div>
        <img
          src={"./images/appImage.webp"}
          className={styles.appImage}
          alt={"AppImage"}
        />
      </div>
      <StoreIcons customContainerStyles={styles.storeImageContainerMobile} />
    </div>
  );
};

export default DownloadSection;
