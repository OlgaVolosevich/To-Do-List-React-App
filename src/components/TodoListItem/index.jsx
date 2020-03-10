import React from 'react';
import { Button } from 'reactstrap';
import classes from './TodoListItem.module.scss';

 const TodoListItem = ({ label, important="false" }) => {

    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
      }; 

    return (
        <span className={classes.todoListItem}>
            <span style={style}>
                {label}
            </span>
            <Button outline color="success">
                <i className="fa fa-exclamation" />
            </Button>
            <Button outline color="danger">
                <i className="fa fa-trash-o" />
            </Button>
        </span>);
}

export default TodoListItem;
