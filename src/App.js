import { useState } from 'react'
import Accordian from './components/accordian'

import './App.css';
import RandomHex from './components/random_hex/randomHex';
import StarRating from './components/StarRating/starRating';
import ImageSlider from './components/ImageSlider/imageSlider';
import ResumeBuilder from './components/resume';
import PlayButton from './components/PlayButton/PlayButton';
import { Counter } from './components/counter';
import { videoDB } from './data';
import VideoList from './components/VideoList/VideoList';
import { AddVideo } from './components/AddVideo/AddVideo';

function App() {
  console.log('renderApp')
  const [count, setCount] = useState(0);
  const [skills] = useState(['Angular', 'React', 'Vue']);
  const [education] = useState([{
    school: 'school1',
    year: 2009,
    address: 'IND'
  }]);
  const [experience] = useState([{
    year: 2022,
    company: 'Dummy1',
    role: 'Software eng'
  },
  {
    year: 2021,
    company: 'Dummy2',
    role: 'Software eng'
  },
  {
    year: 2020,
    company: 'Dummy3',
    role: 'Software eng'
  }
  ]);
  const [videos, setVideos] = useState(videoDB);
  const [editableVideo, setEditableVideo] = useState(null);

  function addVideo(video) {
    setVideos([...videos, { id: videos.length + 1, ...video }])
  }
  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id))
  }
  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id))

  }

  function updateVideo(vid) {
    const index = videos.findIndex((video) => video.id === vid.id);
    const newVideos = [...videos]
    newVideos.splice(index, 1, vid)
    setVideos(newVideos);
    setEditableVideo(null)
  }
  return (
    <div className='App'>
      {/* <Accordian></Accordian> */}
      {/* <RandomHex></RandomHex> */}
      {/* <StarRating noOfStars={10}></StarRating>) */}
      {/* <ImageSlider url='https://picsum.photos/v2/list' limit='10' page='1'></ImageSlider> */}
      {/* <ResumeBuilder skills={skills} education={education} experience={experience}></ResumeBuilder> */}
      <AddVideo addVideo={addVideo} editableVideo={editableVideo} updateVideo={updateVideo}></AddVideo>
      <VideoList videos={videos} deleteVideo={deleteVideo} editVideo={editVideo}></VideoList>
      <PlayButton onPlay={() => { console.log('Play') }} onPause={() => { console.log('Pause') }}>Play</PlayButton>
      <Counter></Counter>
    </div>
  )
}

export default App;
