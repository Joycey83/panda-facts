import Heading from "./Heading";
import { predator } from "../data";

const Predators = () => {
  return (
    <>
      <section className="section predator__container">
        <Heading mainHeading="5 deadliest" spanHeading="predators" />
        {predator.map((predator) => {
          const { id, title, img, text } = predator;
          return <article>item</article>;
        })}
      </section>
    </>
  );
};
export default Predators;
