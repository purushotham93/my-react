import { useState } from 'react'
import Accordian from './components/accordian'

import './App.css';
import RandomHex from './components/random_hex/randomHex';
import StarRating from './components/StarRating/starRating';
import ImageSlider from './components/ImageSlider/imageSlider';
import ResumeBuilder from './components/resume';
import PlayButton from './components/PlayButton/PlayButton';

function App() {
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
  return (
    <div>
      {/* <Accordian></Accordian> */}
      {/* <RandomHex></RandomHex> */}
      {/* <StarRating noOfStars={10}></StarRating>) */}
      {/* <ImageSlider url='https://picsum.photos/v2/list' limit='10' page='1'></ImageSlider> */}
      {/* <ResumeBuilder skills={skills} education={education} experience={experience}></ResumeBuilder> */}
      <PlayButton onPlay={() => {console.log('Play')}} onPause={() => {console.log('Pause')}}>Play</PlayButton>
    </div>
  )
}

export default App;
