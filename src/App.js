import { useReducer, useState } from 'react'
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
  const [editableVideo, setEditableVideo] = useState(null);
  const [videos, dispatch] = useReducer(videoReducer, videoDB);


  function videoReducer(videos, action) {

    switch (action.type) {
      case 'ADD':
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case 'DELETE':
        return videos.filter((video) => video.id !== action.payload.id);
      case 'UPDATE':
        const index = videos.findIndex((video) => video.id === action.payload.vid.id);
        const newVideos = [...videos]
        newVideos.splice(index, 1, action.payload.vid)
        console.log('sdds', action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }

  function addVideo(video) {
    dispatch({ type: 'ADD', payload: { video } })
  }
  function deleteVideo(id) {
    console.log(id)

  }
  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id))

  }

  function updateVideo(vid) {
    dispatch({ type: 'UPDATE', payload: { vid } })
  }
  return (
    <div className='App'>
      {/* <Accordian></Accordian> */}
      {/* <RandomHex></RandomHex> */}
      {/* <StarRating noOfStars={10}></StarRating>) */}
      {/* <ImageSlider url='https://picsum.photos/v2/list' limit='10' page='1'></ImageSlider> */}
      {/* <ResumeBuilder skills={skills} education={education} experience={experience}></ResumeBuilder> */}
      <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
      <VideoList videos={videos} dispatch={dispatch} editVideo={editVideo}></VideoList>
      <PlayButton onPlay={() => { console.log('Play') }} onPause={() => { console.log('Pause') }}>Play</PlayButton>
      <Counter></Counter>
    </div>
  )
}

export default App;
