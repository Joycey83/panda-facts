const About = () => {
  return (
    <>
      <section className="section" id="about">
        <div className="section__heading">
          <h2>
            About <span>Pandas</span>
          </h2>
        </div>
        <div className="section-center about-center">
          <div className="about-img">
            <img src="" className="about-photo" alt="pandas" />
          </div>
          <article className="about-info">
            <h3>10 fun facts</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
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
