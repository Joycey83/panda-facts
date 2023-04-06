import Heading from "./Heading";
import { pandaFacts } from "../data";

const Facts = () => {
  return (
    <>
      <section className="section fact__container" id="pandaFacts">
        <Heading mainHeading="10 facts about" spanHeading="Giant Panda" />

        <div className="grid-container">
          {pandaFacts.map((facts) => {
            const { id, img, title, text } = facts;

            return (
              <div className="fact__card section-center">
                <img className="fact__card--img" src={img} alt="panda" />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{text}</p>
                  <a href="#" className="btn">
                    Learn More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Facts;
