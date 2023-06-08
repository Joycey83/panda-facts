import styles from "./PandaFact.module.css";
const PandaFact = ({ img, title, text }) => {
  return (
    <>
      <div className={styles["fact__card"]}>
        <img className={styles["fact__card--img"]} src={img} alt="panda" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>
      </div>
    </>
  );
};
export default PandaFact;
