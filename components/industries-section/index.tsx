import Indusrty, { IndustriesTitle } from "../industries-component";
import industriesFixtures, { industriesTitle } from '../../fixtures/industries.fixture';


const IndustriesSection = () => {
  return <>
    <IndustriesTitle title={industriesTitle} />
    {industriesFixtures.map((industry, index) => <Indusrty key={index} {...industry} />)}
  </>
}

export default IndustriesSection;
