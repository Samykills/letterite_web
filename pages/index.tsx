import Landing from "components/landing/landing";
import NavBar from "../components/navBar/navBar";
import styles from "./index.module.css";
const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <NavBar />
        <Landing />
      </div>
    </div>
  );
};

export default LandingPage;
