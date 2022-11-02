import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import styles from "../styles/Banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee </span>Connoisseur
      </h1>
      <p className={styles.subTilte}>Discover you local coffee shops!</p>
      <button className={styles.button} onClick={props.handleOnClick}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default Banner;
