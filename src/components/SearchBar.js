import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ''
    }
    // when ever we use this inside a fn inside of a class use arrow fn (this binding)
    onInputChange = (e) => {
        // console.log(e.target.value);
        this.setState({ term: e.target.value })
    }

    // passing the term from parent to child via callback fn
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSearchSubmit(this.state.term)
        // console.log(this.state.term);
    }
    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
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