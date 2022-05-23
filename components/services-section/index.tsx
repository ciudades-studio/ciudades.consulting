import { IService } from "../../fixtures/services.fixtures";
import Service, { ServicesTitle } from "../service-component";
import servicesFixtures from '../../fixtures/services.fixtures';


const ServicesSection = () => {
  return <>
    <ServicesTitle />
    {servicesFixtures.map((service, index) => <Service key={index} {...service} />)}
  </>
}

export default ServicesSection;
