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
              But due to expanding human populations and development, the
              species is now restricted to around 20 isolated patches of bamboo
              forest in six mountain ranges in China's Sichuan, Shaanxi and
              Gansu provinces. Most of the remaining wild pandas live in the
              Minshan and Qinling mountains. And it is here that WWF has
              focussed its giant panda conservation work, supporting the Chinese
              government's efforts to conserve the species. Since habitat loss
              is the most serious threat to the panda, establishing new reserves
              and extending existing ones are crucial to its survival.
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
