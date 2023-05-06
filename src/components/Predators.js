import Heading from "./Heading";
import { predator } from "../data";

const Predators = () => {
  return (
    <>
      <section className="section predator__container">
        <Heading mainHeading="5 deadliest" spanHeading="predators" />
        {predator.map((predator) => {
          const { id, title, img, text } = predator;
          return (
            <article className="predator__container">
              <div className="img__container">
                <img src="" alt="" className="predator--img" />
              </div>
              <div className="predator--info">
                <h4 className="predator--title"></h4>
                <p className="predator--text"></p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};
export default Predators;
