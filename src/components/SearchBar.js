import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ''
    }
    // when ever we use this inside a fn inside of a class use arrow fn (this binding)
    onInputChange = (e) => {
        console.log(e.target.value);
        this.setState({ term: e.target.value })
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label >search video</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }

}
export default SearchBar