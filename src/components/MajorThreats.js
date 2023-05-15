import Threats from "./Threats";
import Heading from "./Heading";
import { threats } from "../data";

const MajorThreats = () => {
  return (
    <>
      <section className="section major-threats__container">
        <Heading mainHeading="major" spanHeading="threats" />
        {threats.map((threat) => {
          return <Threats key={threat.id} {...threat} />;
        })}
      </section>
    </>
  );
};
export default MajorThreats;
