import React, { Component } from 'react';
import { Input } from 'reactstrap';
import './SearchPannel.scss';

class SearchPannel extends Component {
   
    state = {
        value : ''
    }

    onSearchChange = (e) => {
        const text = e.target.value;
        this.setState({
            value : text
        })
        this.props.onSearchChange(text);
    }
    render () {
        return <Input className='searchInput' 
                      type="text" 
                      placeholder="type to search"
                      value={this.state.value}
                      onChange={this.onSearchChange}/>;
    }
}

export default SearchPannel;