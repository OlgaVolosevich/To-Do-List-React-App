import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
//import classes from './ItemStatusFilter.module.scss';

class ItemStatusFilter extends Component {

    render () {
     
        return (
            <ButtonGroup>
                <Button>All</Button>
                <Button>Active</Button>
                <Button>Done</Button>
            </ButtonGroup>
        )
    }
}

export default ItemStatusFilter;
