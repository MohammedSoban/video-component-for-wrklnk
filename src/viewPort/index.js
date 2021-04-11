import handleViewport from 'react-in-viewport';
import ReactPlayer from "react-player";

const videos = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/todo-app-3df9d.appspot.com/o/Stories_Instagram_4.mp4?alt=media&token=5ff9c4dc-feb1-4dd2-9b14-10084bf02d47",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/todo-app-3df9d.appspot.com/o/Stories_Instagram_3.mp4?alt=media&token=10b94b5d-5aad-4b24-b07d-99a5eeb5ea9e",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/todo-app-3df9d.appspot.com/o/Stories_Instagram_3.mp4?alt=media&token=10b94b5d-5aad-4b24-b07d-99a5eeb5ea9e",
  },

];
const Block = (props) => {

  console.log(props)
  const { inViewport, forwardedRef, index } = props;
  const color = inViewport ? '#217ac0' : '#ff9800';
  const text = inViewport ? 'In viewport' : 'Not in viewport';
  console.log(inViewport)
  return (
    <div className="viewport-block" ref={forwardedRef}>


      <div className="player-wrapper">
        <ReactPlayer
          url={ videos[index].url}
          loop="true"
          controls="false"
          // muted='false'

          // width='100%'
          // height='100%'
          muted={true}
          playing={true}
          playsinline='true'

        />
      </div>

    </div>
  );
};

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);


const Component = (props) => (

  <div>
    <div>
      <h2>Scroll down to make component in viewport</h2>
    </div>
    {videos.map((video, index) => <ViewportBlock onEnterViewport={() => console.log('enter', index)} onLeaveViewport={() => console.log('leave', index)} index={index} />)}
  </div>
)

export default Component