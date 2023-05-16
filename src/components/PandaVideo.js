import ReactPlayer from "react-player";

const PandaVideo = () => {
  return (
    <>
      <h2>Panda Video</h2>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=TBTKuhblD1U"
        controls="true"
      />
    </>
  );
};
export default PandaVideo;
