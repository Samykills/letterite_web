import styles from "./storeIcons.module.css";

const PLAY_STORE_LINK =
  "https://play.google.com/store/apps/details?id=com.letterrite&hl=en&gl=US";
const APP_STORE_LINK =
  "https://play.google.com/store/apps/details?id=com.letterrite&hl=en&gl=US";

type StoreIconsProps = {
  customContainerStyles: any;
};

const StoreIcons: React.FC<StoreIconsProps> = ({ customContainerStyles }) => {
  return (
    <div className={customContainerStyles}>
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
  );
};

export default StoreIcons;
