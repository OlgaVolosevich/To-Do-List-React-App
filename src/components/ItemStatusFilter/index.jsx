import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import classes from './ItemStatusFilter.module.scss';
const ItemStatusFilter = () => {
    return (
        <ButtonGroup>
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Done</Button>
        </ButtonGroup>
    )
}

export default ItemStatusFilter;
