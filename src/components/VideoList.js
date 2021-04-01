import React from 'react';
import VideoItem from './VideoItem'

const VideoList = (props) => {
    const videos = props.videos.map((video) => {
        return <VideoItem
            videoSelect={props.videoSelect}
            video={video}
            key={video.id.videoId} />
    })
    return (
        <div className='ui relaxed divided list'>
            {videos}
        </div>
    )
}

export default VideoList