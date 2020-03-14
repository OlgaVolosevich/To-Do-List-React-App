import React, { Component } from 'react';
import { Button } from 'reactstrap';

 class ItemAddForm extends Component {
   
    render () {
        return (
            <div>
                <Button onClick={()=>this.props.addItem('Hello!')} color="primary">primary</Button>
            </div>
        )
    }
}

export default ItemAddForm;
