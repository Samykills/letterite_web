import HowItWorksData from "const/howItWorksData";
import ListItems from "./components/listItems";
import styles from "./howItWorksSection.module.css";
const HowItWorksSection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>How does it work?</p>
      <div className={styles.subContainer}>
        {HowItWorksData.map((item, index) => {
          const imageStyleClassName = getIconStyles(item)
          return <ListItems data={item} key={index} imageStyleClassName={imageStyleClassName} />;
        })}
      </div>
    </div>
  );
};

const getIconStyles=(item)=>{
  if(item.title.includes('Create')){
    return styles.createIcon
  }else if(item.title.includes('Choose')){
    return styles.locationIcon
  }else{
    return styles.sendIcon
  }
}

export default HowItWorksSection;
