import { hightlightsSlides } from "../constants";

const VideoCarosel = () => {
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider">
            <div className="video-carousel_container">Test</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarosel;
