import pandaReserve from "../images/panda-reserve.jpg";
const HabitatTwo = () => {
  return (
    <>
      <article className=" section habitat-two--info">
        <p>
          After a significant increase in recent years, China now boasts a
          network of 67 panda reserves, which safeguard more than 66% of the
          giant pandas in the wild and almost 54% of their existing habitat. The
          Chinese government, in partnership with WWF, has also developed bamboo
          corridors to link isolated pockets of forest, allowing the pandas
          within them to move to new areas, find more food and meet more
          potential breeding mates.
        </p>
      </article>
      <div className="reserve__img">
        <p>The image below only show some of the 67 panda reserves in China</p>
        <img
          src={pandaReserve}
          className="reserve__photo"
          alt="panda reserve map"
        />
      </div>
    </>
  );
};
export default HabitatTwo;
