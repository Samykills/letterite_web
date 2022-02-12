import styles from "./navBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <img
        src={"/icons/letteriteHeartIcon.png"}
        alt={"letterite heart icon"}
        className={styles.icon}
      />
      <h1 className={styles.navBarTitle}>Letterite</h1>
    </div>
  );
};

export default NavBar;
