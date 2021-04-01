import React from 'react'

const VideoDetail = (props) => {
    // when the component is rendered first the selectedVideo state is null so line 10 will give error 
    if (!props.video) {
        return <div>loading...</div>
    }
    return (
        <div>
            <div className='ui segment'>
                <h4 className='ui hedaer'>{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>
    )
}
export default VideoDetail