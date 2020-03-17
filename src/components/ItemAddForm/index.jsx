import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import classes from './ItemAddForm.module.scss';

 class ItemAddForm extends Component {

    state = {
        label : ''
    }
   
    onInputChange = (e) => {
        this.setState({
            label : e.target.value
        })
    }

    onAddItem = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
           label : ''
        })
    }
    render () {
        return (
            <Form onSubmit={this.onAddItem}>
                <FormGroup className={classes.newTodoForm}>
                    <Input  className={classes.newTodoInput}
                            type="text" 
                            placeholder="What else you need to do?"
                            onChange={this.onInputChange}
                            value={this.state.label}/>
                    <Button color="primary">Add Todo</Button>
                </FormGroup>
            </Form>
        )
    }
}

export default ItemAddForm;
