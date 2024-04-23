import './PlayButton.css';
export default function PlayButton({message, children, onPlay, onPause}) {
    let isPlaying = false;
    function handleClick(e) {
        if(isPlaying) {
            onPause();
        } else {
            onPlay();
        }
        isPlaying = !isPlaying;
    }
  return (
    <div className="playButton">
      <button onClick={(e)=> handleClick(e)}>{children}</button>
    </div>
  );
}
