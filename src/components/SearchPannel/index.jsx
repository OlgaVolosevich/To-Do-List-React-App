import React from 'react';
import { Input } from 'reactstrap';
import classes from './SearchPannel.module.scss';

const SearchPannel = () => {
    return <Input className={classes.searchInput} type="text" placeholder="type to search"/>;
}

export default SearchPannel;