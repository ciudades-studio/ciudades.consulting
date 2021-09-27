import Logo from "../../assets/gray-logo.svg";
import styles from "./ciudades-gray.module.scss";

export default function CiudadesGray() {
  return (
    <div className={styles["ciudades-gray-wrapper"]}>
      <div className={styles["big-screen-wrapper"]}>
        <div className={styles["ciudades-gray-container"]}>
          <div className={styles["ciudades-gray-logo-wrapper"]}>
            <Logo className={styles["ciudades-gray-logo"]} />
          </div>
        </div>
      </div>
    </div>
  );
}