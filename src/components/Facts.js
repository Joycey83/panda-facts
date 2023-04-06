import Heading from "./Heading";
import { pandaFacts } from "../data";

const Facts = () => {
  return (
    <>
      <section className="section fact__container" id="pandaFacts">
        <Heading mainHeading="10 facts about" spanHeading="Giant Panda" />

        <div className="grid-container"></div>
      </section>
    </>
  );
};
export default Facts;
