import { useEffect, useState } from "react"

import './AddVideo.css'

const initialState = {
    time: '1 month ago',
    channel: 'Purushotham react',
    verified: true,
    title: '',
    views: '',
}

export function AddVideo({ editableVideo, dispatch }) {

    const [video, setVideo] = useState(initialState)
    function handleSubmit(e) {
        console.log(e)
        e.preventDefault();
        e.stopPropagation();
        if (!editableVideo) {
            dispatch({ type: 'ADD', payload: { video } })
        } else {
            dispatch({ type: 'UPDATE', payload: { vid: video } });
        }
    }

    function handleChange(e) {
        console.log(e.target.value);
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
        console.log(video)
    }

    useEffect(() => {
        if (editableVideo) {
            setVideo(editableVideo)
        } else {
            setVideo(initialState)
        }
    }, [editableVideo])

    return <>
        <form>
            <input type='text' name='title' placeholder="video title" onChange={handleChange} value={video.title} ></input>
            <input type='text' name='views' placeholder="views" onChange={handleChange} value={video.views}></input>

            <button onClick={handleSubmit}>{editableVideo ? 'Edit' : 'Add'} Video</button>
        </form>
    </>
}
