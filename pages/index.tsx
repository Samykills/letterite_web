import About from "components/about/about";
import DownloadSection from "components/downloadSection/downloadSection";
import FooterSection from "components/footerSection/footerSection";
import HowItWorksSection from "components/howItWorksSection/howItWorksSection";
import Landing from "components/landing/landing";
import NavBar from "../components/navBar/navBar";
import styles from "./index.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <NavBar />
        <Landing />
        <About />
        <HowItWorksSection />
        <DownloadSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default LandingPage;
