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
            <article className="predators__container" key={id}>
              <div className="img__container">
                <img src={img} alt={title} className="predator--img" />
              </div>
              <div className="predator--info">
                <h4 className="predator--title">{title}</h4>
                <p className="predator--text">{text}</p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};
export default Predators;
