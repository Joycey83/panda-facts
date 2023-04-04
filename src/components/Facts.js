import Heading from "./Heading";

const Facts = () => {
  return (
    <>
      <section className="section fact__container" id="pandaFacts">
        <Heading mainHeading="10 facts about" spanHeading="Giant Panda" />

        <div className="grid-container">
          <div className="fact__card section-center ">
            <img
              className="fact__card--img"
              src="https://th.bing.com/th?id=OIP.Db-1G3YQZEdqjmFWe6IRDAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"
              alt="panda"
            />
            <div className="card-body">
              <h5 className="card-title">Panda Fact 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit cum repellendus debitis recusandae! Distinctio
                necessitatibus tempore delectus nostrum, expedita eos quia
                libero vero quis. Voluptate quae similique perferendis excepturi
                accusamus.
              </p>
              <a href="#" className="btn">
                Learn More
              </a>
            </div>
          </div>

          {/* 2nd card */}

          <div className="fact__card section-center ">
            <img
              className="fact__card--img"
              src="https://th.bing.com/th?id=OIP.Db-1G3YQZEdqjmFWe6IRDAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"
              alt="panda"
            />
            <div className="card-body">
              <h5 className="card-title">Panda Fact 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit cum repellendus debitis recusandae! Distinctio
                necessitatibus tempore delectus nostrum, expedita eos quia
                libero vero quis. Voluptate quae similique perferendis excepturi
                accusamus.
              </p>
              <a href="#" className="btn">
                Learn More
              </a>
            </div>
          </div>

          {/* 3RD CARD */}

          <div className="fact__card section-center ">
            <img
              className="fact__card--img"
              src="https://th.bing.com/th?id=OIP.Db-1G3YQZEdqjmFWe6IRDAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"
              alt="panda"
            />
            <div className="card-body">
              <h5 className="card-title">Panda Fact 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit cum repellendus debitis recusandae! Distinctio
                necessitatibus tempore delectus nostrum, expedita eos quia
                libero vero quis. Voluptate quae similique perferendis excepturi
                accusamus.
              </p>
              <a href="#" className="btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Facts;
