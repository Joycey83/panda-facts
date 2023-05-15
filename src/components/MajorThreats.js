import HabitatLossFragmentation from "./HabitatLossFragmentation";
import Heading from "./Heading";
import { threats } from "../data";

const MajorThreats = () => {
  return (
    <>
      <section className="section major-threats__container">
        <Heading mainHeading="major" spanHeading="threats" />
        {threats.map((threat) => {
          return <HabitatLossFragmentation key={threat.id} {...threat} />;
        })}
      </section>
    </>
  );
};
export default MajorThreats;
