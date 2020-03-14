import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './TodoListItem.scss';

 class TodoListItem extends Component {

    state = {
        done: false,
        important : this.props.important,
    }

     onLabelClick = () => {
         this.setState((state) => ({
            done: !state.done,
          }));
     }

     onToggleImportant = () => {
        this.setState((state) => ({
            important: !state.important,
          }));
     }

    render () {
        const { important } = this.state;
        const { done } = this.state;
        let classNames='';
        if (done) {
            classNames += 'done ';
        }
        if (important) {
            classNames += 'impotant ';
        }
        const { label, onDeleted } = this.props;

        return (
            <span className='todoListItem'>
                <span className={classNames} onClick={this.onLabelClick}>
                    {label}
                </span>
                <Button onClick={this.onToggleImportant} outline color="success">
                    <i className="fa fa-exclamation" />
                </Button>
                <Button outline 
                color="danger"
                onClick={onDeleted}>
                    <i className="fa fa-trash-o" />
                </Button>
            </span>);
    }
 }

export default TodoListItem;
