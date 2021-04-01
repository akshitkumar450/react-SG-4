import React from 'react'

const VideoDetail = (props) => {
    // when the component is rendered first the selectedVideo state is null so line 10 will give error 
    if (!props.video) {
        return <div>loading...</div>
    }
    return (
        <div>
            {props.video.snippet.title}
        </div>
    )
}
export default VideoDetail