import React from 'react';
import SearchBar from './SearchBar'
// import youtubeKey from '../api/youtubeKey'
import axios from 'axios'
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
        // console.log(response.data.items);
        this.setState({ videos: response.data.items })

    }
    render() {
        return (
            <div className='ui container'>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <p> i have {this.state.videos.length} videos</p>
            </div>
        )
    }
}

export default App