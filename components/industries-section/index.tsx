import Industrie from '../industries-component'
import styles from './industries-section.module.scss'
import industriesFixtures from '../../fixtures/industries.fixture'

const IndustriesSection = () => {
  return (
    <div className={styles["industries-container"]}>
      <h2 className={styles["industries-section-title"]}>
        Industries
      </h2>
      {industriesFixtures.map((industrie, index) => {
        return (
            <Industrie {...industrie} key={index} />
          );
      })}
    </div>
  );
}

export default IndustriesSection;