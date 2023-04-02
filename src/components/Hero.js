const Hero = () => {
  return (
    <>
      <section className="hero__container" id="home">
        <div className="hero__banner ">
          <h1>Giant Panda</h1>
          <p className="hero-para">Chinese national treasure</p>
          <a
            href="https://www.worldwildlife.org/species/giant-panda"
            target="_blank"
            rel="noreferrer"
            className="hero__btn"
          >
            learn more
          </a>
        </div>
      </section>
    </>
  );
};
export default Hero;
