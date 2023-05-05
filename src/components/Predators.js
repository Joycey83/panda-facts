import Heading from "./Heading";
import { predator } from "../data";

const Predators = () => {
  return (
    <>
      <section className="section predator__container">
        <Heading mainHeading="5 deadliest" spanHeading="predators" />
        {predator.map((items) => {
          return <div>item</div>;
        })}
      </section>
    </>
  );
};
export default Predators;
