const Threats = ({ title, img, textOne, textTwo }) => {
  return (
    <>
      <section className="section threats__container">
        <h2>{title}</h2>
        <div className="threats--info__container">
          <img src={img} alt={title} className="threats--img" />
          <div className="threats--info">
            <p>{textOne}</p>
            <p>{textTwo}</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Threats;
