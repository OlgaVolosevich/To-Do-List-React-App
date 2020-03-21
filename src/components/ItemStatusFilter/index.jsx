import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './ItemStatusFilter.scss';

class ItemStatusFilter extends Component {

    buttons = [
    {label: 'All', name: 'all'},
    {label: 'Active', name: 'active'},
    {label: 'Done', name: 'done'},
 ]
   
    render () { 
        const buttons = this.buttons.map(({label, name}) => {
            const isActive = this.props.filterValue === name;
            const clazz = isActive ? 'btn btn-info' : 'button';
            return <Button key={name} className={clazz} onClick={()=>this.props.onFilterButtonClick(name)}>{label}</Button>
     })
        return (
            <ButtonGroup>
                {buttons}
            </ButtonGroup>
        )
    }
}

export default ItemStatusFilter;
