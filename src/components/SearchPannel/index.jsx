import React, { Component } from 'react';
import { Input } from 'reactstrap';
import classes from './SearchPannel.module.scss';

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
        return <Input className={classes.searchInput} 
                      type="text" 
                      placeholder="type to search"
                      value={this.state.value}
                      onChange={this.onSearchChange}/>;
    }
}

export default SearchPannel;