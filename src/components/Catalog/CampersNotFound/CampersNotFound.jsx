import styles from "./CampersNotFound.module.css";
import Image from "../../../assets/images/404-CampersNotFound.webp";

const CampersNorFound = () => {
  return (
    <div className={styles.camperNotFoundWrapper}>
      <img
        className={styles.camperNotFoundImage}
        src={Image}
        alt="Campers not found"
        width={500}
        loading="lazy"
      />
    </div>
  );
};

export default CampersNorFound;
