const HabitatLossFragmentation = ({ title, img, textOne, textTwo }) => {
  return (
    <>
      <section className="section habitat-loss--frag">
        <div className="habitat-loss__container">
          <h2 className="habitat-loss--heading">
            Habitat loss and fragmentation
          </h2>
          <img src={img} alt={title} />
        </div>
      </section>
    </>
  );
};
export default HabitatLossFragmentation;
