import Heading from "./Heading";

const Habitat = () => {
  return (
    <>
      <section className="section habitat__container" id="habitat">
        <Heading mainHeading="Habitat of" spanHeading="The Panda" />
        <p className="habitat__caption">
          The giant panda was once widespread throughout southern and eastern
          China, as well as neighbouring Myanmar and northern Vietnam.
        </p>
        <div className="section-center about-center">
          <div className="about__img">
            <img
              src="https://data.chinatravel.com/images/mobile-first/giant-panda/current-panda-habitat.jpg"
              className="habitat__photo"
              alt="pandas"
            />
          </div>
          <article className="habitat__info">
            <h3 className="habitat__subheading">A shrinking Habitat</h3>

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
export default Habitat;
