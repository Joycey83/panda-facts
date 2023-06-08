import styles from "./PandaFact.module.css";
const PandaFact = ({ img, title, text }) => {
  return (
    <>
      <div className={styles["fact__card"]}>
        <img className={styles["fact__card--img"]} src={img} alt="panda" />
        <div className={styles["card-body"]}>
          <h5 className={styles["card-title"]}>{title}</h5>
          <p className={styles["card-text"]}>{text}</p>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>
      </div>
    </>
  );
};
export default PandaFact;
