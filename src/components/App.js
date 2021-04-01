import React from 'react';
import SearchBar from './SearchBar'
// import youtubeKey from '../api/youtubeKey'
import axios from 'axios'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    onSearchSubmit = async (term) => {
        // console.log(term);
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                q: term,
                key: 'AIzaSyA-OUjkdxQGevjTBuxRAloWTlqxPlETdf8'
            }
        })
        // total videos
        // console.log(response.data.items);
        this.setState({ videos: response.data.items })

    }

    onVideoSelect = (video) => {
        // console.log('from app', video);
        // update the state with the selected video and pass it as props to videoDetail
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        )
    }
}

export default App

// communicating from parent to child via props
// communicating from child to parent via callback fn method


// we have make state for selectedvideo bca when we click on any video we want to play it
//  make a fn onVideoSelect and pass it to VideoList and further to VideoItem (as a props)
// and when any thumbnail click we run the on video select function in App.js and update the state for selectedvideo