import React from 'react';
import SearchBar from './SearchBar'
// import youtubeKey from '../api/youtubeKey'
import axios from 'axios'
import VideoList from './VideoList'
class App extends React.Component {

    state = {
        videos: []
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
    render() {
        return (
            <div className='ui container'>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App