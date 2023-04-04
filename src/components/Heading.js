const Heading = ({ mainHeading, spanHeading }) => {
  return (
    <>
      <div className="section__heading">
        <h2>
          {mainHeading} <span> {spanHeading}</span>
        </h2>
      </div>
    </>
  );
};
export default Heading;
