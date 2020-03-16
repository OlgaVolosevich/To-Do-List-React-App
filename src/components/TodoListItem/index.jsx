import React from 'react';
import { Button } from 'reactstrap';
import './TodoListItem.scss';

 const TodoListItem = ({ label, onDeleted, onToggleImportant, onToggleDone, done, important }) => {

        let classNames='';
        if (done) {
            classNames += 'done ';
        }
        if (important) {
            classNames += 'impotant ';
        }
        return (
            <span className='todoListItem'>
                <span className={classNames} onClick={onToggleDone}>
                    {label}
                </span>
                <Button onClick={onToggleImportant} outline color="success">
                    <i className="fa fa-exclamation" />
                </Button>
                <Button outline 
                color="danger"
                onClick={onDeleted}>
                    <i className="fa fa-trash-o" />
                </Button>
            </span>);
}

export default TodoListItem;
