import { useState } from "react"

import './AddVideo.css'

const initialState = {
    time: '1 month ago',
    channel: 'Purushotham react',
    verified: true,
    title:'',
    views: '',
}

export function AddVideo ({addVideo}) {
   
    const [video, setVideo] = useState(initialState)
    function handleSubmit (e) {
        console.log(e)
        e.preventDefault();
        e.stopPropagation();
        addVideo(video)
    }

    function handleChange (e) {
        console.log(e.target.value);
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
        console.log(video)
    }

    return <>
    <form>
        <input type='text' name='title' placeholder="video title" onChange={handleChange} value={video.title} ></input>
        <input type='text' name='views' placeholder="views" onChange={handleChange} value={video.views}></input>
        
        <button onClick={handleSubmit}>Add Video</button>
    </form>
    </>
}
