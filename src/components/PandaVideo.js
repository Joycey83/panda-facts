import ReactPlayer from "react-player/youtube";
import { videos } from "../data";

const PandaVideo = () => {
  return (
    <>
      <section className="section panda--video__container ">
        <h2>Panda Video</h2>

        {videos.map((video) => {
          const { id, text, url } = video;

          return (
            <div key={id}>
              <h4>{text}</h4>
              <ReactPlayer url={url} controls={true} />
            </div>
          );
        })}
      </section>
    </>
  );
};
export default PandaVideo;
