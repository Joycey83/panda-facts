import styles from "./Heading.module.css";
const Heading = ({ mainHeading, spanHeading }) => {
  return (
    <>
      <div className={styles["section__heading"]}>
        <h2>
          {mainHeading} <span> {spanHeading}</span>
        </h2>
      </div>
    </>
  );
};
export default Heading;
