import Heading from "./Heading";
import { pandaFacts } from "../data";
import PandaFact from "./PandaFact";
import styles from "./Facts.module.css";

const Facts = () => {
  return (
    <>
      <section className={`section ${styles.fact__container}`} id="pandaFacts">
        <Heading mainHeading="10 facts about" spanHeading="Giant Panda" />

        <div className={styles["grid-container"]}>
          {pandaFacts.map((facts) => {
            return <PandaFact key={facts.id} {...facts} />;
          })}
        </div>
      </section>
    </>
  );
};
export default Facts;
