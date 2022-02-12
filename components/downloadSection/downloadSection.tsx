import styles from "./downloadSection.module.css";

const DownloadSection = () => {
  return (
    <>
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
            <img
              src={"./images/googlePlay.png"}
              className={styles.storeImage}
            />
            <img src={"./images/appStore.png"} className={styles.storeImage} />
          </div>
        </div>
        <img src={"./images/appImage.png"} className={styles.appImage} />
      </div>
      <div className={styles.storeImageContainerMobile}>
        <img src={"./images/googlePlay.png"} className={styles.storeImage} />
        <img src={"./images/appStore.png"} className={styles.storeImage} />
      </div>
    </>
  );
};

export default DownloadSection;
