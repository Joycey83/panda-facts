const Threats = ({ title, img, text, textOne, textTwo }) => {
  return (
    <>
      <section className="section habitat-loss--frag">
        <div className="habitat-loss__container">
          <h2>{title}</h2>
          <img src={img} alt={title} />
          <div className="">
            <p>{text}</p>
            <p>{textOne}</p>
            <p>{textTwo}</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Threats;
