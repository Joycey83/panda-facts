const HabitatLossFragmentation = ({ title, img, textOne, textTwo }) => {
  return (
    <>
      <section className="section habitat-loss--frag">
        <div className="habitat-loss__container">
          <img src={img} alt={title} />
        </div>
      </section>
    </>
  );
};
export default HabitatLossFragmentation;
