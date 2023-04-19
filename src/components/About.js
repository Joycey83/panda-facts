import Heading from "./Heading";

const About = () => {
  return (
    <>
      <section className="section" id="about">
        <Heading mainHeading="About the" spanHeading="Giant Panda" />

        <div className="section-center about-center">
          <div className="about__img">
            <img
              src=""
              className="about__photo"
              alt="panda chewing on Bamboo"
            />
          </div>
          <article className="about__info">
            <h3 className="about__subheading">overview</h3>

            <p>
              The panda, with its distinctive black and white coat, is adored by
              the world and considered a national treasure in China.
            </p>
            <p>
              Pandas live mainly in temperate forests high in the mountains of
              southwest China, where they subsist almost entirely on bamboo.
              They must eat around 26 to 84 pounds of it every day, depending on
              what part of the bamboo they are eating.
            </p>
            {/* information taken from WWF */}
            <a href="#home" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
    </>
  );
};
export default About;
