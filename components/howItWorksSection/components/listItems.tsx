import HowItWorksTypes from "types/howItWorksTypes";
import styles from "./listItems.module.css";

type ListItemsProps = {
  data: HowItWorksTypes;
  imageStyleClassName: any;
};

const ListItems: React.FC<ListItemsProps> = ({ data, imageStyleClassName }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{data.title}</p>
      <div>
        <img src={data.imageSrc} alt="create" className={imageStyleClassName} />
      </div>
      <p className={styles.subTitle}>{data.description}</p>
    </div>
  );
};

export default ListItems;
