import styles from "./downloadSection.module.css";

const PLAY_STORE_LINK =
  "https://play.google.com/store/apps/details?id=com.letterrite&hl=en&gl=US";
const APP_STORE_LINK =
  "https://play.google.com/store/apps/details?id=com.letterrite&hl=en&gl=US";

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
          <div className={styles.storeImageContainerDesktop}>
            <a href={PLAY_STORE_LINK} target={"_blank"}>
              <img
                src={"./images/googlePlay.webp"}
                className={styles.storeImage}
                alt={"googlePlayStore"}
              />
            </a>
            <a href={APP_STORE_LINK} target={"_blank"}>
              <img
                src={"./images/appStore.webp"}
                className={styles.storeImage}
                alt={"appleAppStore"}
              />
            </a>
          </div>
        </div>
        <img
          src={"./images/appImage.webp"}
          className={styles.appImage}
          alt={"AppImage"}
        />
      </div>
      <div className={styles.storeImageContainerMobile}>
        <a href={PLAY_STORE_LINK} target={"_blank"}>
          <img
            src={"./images/googlePlay.webp"}
            className={styles.storeImage}
            alt={"googlePlayStore"}
          />
        </a>
        <a href={APP_STORE_LINK} target={"_blank"}>
          <img
            src={"./images/appStore.webp"}
            className={styles.storeImage}
            alt={"appleAppStore"}
          />
        </a>
      </div>
    </div>
  );
};

export default DownloadSection;
