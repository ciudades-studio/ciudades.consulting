import Service from "../service-component";
import servicesFixtures from '../../fixtures/services.fixtures';


const ServicesSection = () => {
  return (
    <>
      {servicesFixtures.map((service, index) => <Service key={index} {...service} />)}
    </>
  );
}

export default ServicesSection;
