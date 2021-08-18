import { useState } from "react";
import "./videoCard.css";

let VideoCard = () => {
  let [playing, setPlaying] = useState(false);

  return (
    <div className="video-card">
      <p className="video-card-username">Fake user</p>
      <span className="video-card-music">
        <span class="material-icons">music_note</span>
        <marquee>some song</marquee>
      </span>

      <span class="material-icons-outlined video-card-comment">chat</span>

      <span class="material-icons-outlined video-card-like">
        favorite_border
      </span>

      <video
        onClick={(e) => {
          if (playing) {
            e.currentTarget.pause();
            setPlaying(false);
          } else {
            e.currentTarget.play();
            setPlaying(true);
          }
        }}
        loop
        src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
        className="video-card-video"
      ></video>
    </div>
  );
};

export default VideoCard;
