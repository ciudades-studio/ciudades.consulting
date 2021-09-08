import { IIndustries } from "../../fixtures/industries.fixtures";
import Image from "next/image";
import styles from "./industries.module.scss";

export default function Industries({ imgUrl, industriesTitle, aboutText, closingText }: IIndustries) {
  return (
    <div className={styles["industries-wrapper"]}>
      <div className={styles["big-screen-wrapper"]}>
        <div className={styles["industries-grid"]}>
          <picture className={styles["industries-img-wrapper"]}>
            <Image 
              alt="image"
              src={imgUrl}
              width={300}
              height={400}
              objectFit="cover"
            /> 
          </picture>
          <div className={styles["industries-text-wrapp"]}>
            <div className={styles["industries-text-wrapper"]}>
              <div className={styles["industires-heading-wrapp"]}>
                <h2 className={styles["industires-heading-text"]}>
                  {industriesTitle}
                </h2>
              </div>
              <div className={styles["industries-text"]}>
                <p className={styles["text"]}>
                  {aboutText}
                </p>
                <p>{closingText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}