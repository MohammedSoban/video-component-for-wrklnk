import { React, useState } from "react";
import ReactPlayer from "react-player";
import "./index.css";
import { useEffect } from "react";

function Player() {
  const videos = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/todo-app-3df9d.appspot.com/o/Stories_Instagram_4.mp4?alt=media&token=5ff9c4dc-feb1-4dd2-9b14-10084bf02d47",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/todo-app-3df9d.appspot.com/o/Stories_Instagram_3.mp4?alt=media&token=10b94b5d-5aad-4b24-b07d-99a5eeb5ea9e",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/todo-app-3df9d.appspot.com/o/Stories_Instagram_4.mp4?alt=media&token=5ff9c4dc-feb1-4dd2-9b14-10084bf02d47",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/todo-app-3df9d.appspot.com/o/Stories_Instagram_3.mp4?alt=media&token=10b94b5d-5aad-4b24-b07d-99a5eeb5ea9e",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/todo-app-3df9d.appspot.com/o/Stories_Instagram_4.mp4?alt=media&token=5ff9c4dc-feb1-4dd2-9b14-10084bf02d47",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/todo-app-3df9d.appspot.com/o/Stories_Instagram_3.mp4?alt=media&token=10b94b5d-5aad-4b24-b07d-99a5eeb5ea9e",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/todo-app-3df9d.appspot.com/o/Stories_Instagram_4.mp4?alt=media&token=5ff9c4dc-feb1-4dd2-9b14-10084bf02d47",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/todo-app-3df9d.appspot.com/o/Stories_Instagram_3.mp4?alt=media&token=10b94b5d-5aad-4b24-b07d-99a5eeb5ea9e",
    },
  ];

  const [playing, setPlaying] = useState(false);
  return (
    <>
  
        {videos.map((video, index) => {
          return (
            <div className="player-wrapper">
              <ReactPlayer
                url={video.url}
                loop="true"
                controls="false"
                muted='true'
                // width='100%'
                // height='100%'
                playing={true}
                playsinline='true' 
                
                />
            </div>);
        })}
 

    </>
  );
}

export default Player;
