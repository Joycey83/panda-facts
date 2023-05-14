import HabitatLossFragmentation from "./HabitatLossFragmentation";
import Heading from "./Heading";
import { threats } from "../data";

const Threats = () => {
  return (
    <>
      <section className="section threats__container">
        <Heading mainHeading="major" spanHeading="threats" />
        {threats.map((threat) => {
          return <HabitatLossFragmentation key={threat.id} {...threat} />;
        })}
      </section>
    </>
  );
};
export default Threats;
