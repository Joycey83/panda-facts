import HabitatLossFragmentation from "./HabitatLossFragmentation";
import Heading from "./Heading";

const Threats = () => {
  return (
    <>
      <section className="section threats__container">
        <Heading mainHeading="major" spanHeading="threats" />
        <HabitatLossFragmentation />
      </section>
    </>
  );
};
export default Threats;
