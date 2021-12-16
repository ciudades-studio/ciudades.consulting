import Industries from '../industries-component'
import styles from './industries-section.module.scss'
import industriesFixtures from '../../fixtures/industries.fixture'

const IndustriesSection = () => {
  return (
    <div className={styles["industries-container"]}>
      <h2>Industries</h2>
      {industriesFixtures.map((industrie, index) => <Industries {...industrie} key={index} />)}
    </div>
  );
}

export default IndustriesSection;