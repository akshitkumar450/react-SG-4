import axios from 'axios'

const KEY = "AIzaSyA-OUjkdxQGevjTBuxRAloWTlqxPlETdf8"

// alternate for axios
// pre configur the axios object 
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
