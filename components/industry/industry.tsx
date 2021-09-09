import { IIndustry } from "../../fixtures/industries.fixtures";
import Image from "next/image";
import styles from "./industry.module.scss";

export default function Industry({ imgUrl, title, text }: IIndustry) {
  return (
    <div className={styles["industry-wrapper"]}>
      <div className={styles["big-screen-wrapper"]}>
        <div className={styles["industry-grid"]}>
          <picture className={styles["industry-img-wrapper"]}>
            <Image 
              alt="image"
              src={imgUrl}
              width={300}
              height={400}
              objectFit="cover"
            /> 
          </picture>
          <div className={styles["industry-text-wrapp"]}>
            <div className={styles["industry-text-wrapper"]}>
              <div className={styles["industry-heading-wrapp"]}>
                <h2 className={styles["industry-heading-text"]}>
                  {title}
                </h2>
              </div>
              <div className={styles["industry-text"]}>
                <p className={styles["text"]}>
                  {text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}