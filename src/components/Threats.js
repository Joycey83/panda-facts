const Threats = ({ title, img, text, textOne, textTwo }) => {
  return (
    <>
      <section className="section threats__container">
        <div className="threats--info__container">
          <h2>{title}</h2>
          <img src={img} alt={title} className="threats--img" />
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
