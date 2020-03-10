import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import TodoListItem from '../TodoListItem';

const TodoList = ({ todos }) => {
    const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
        return (
            <ListGroupItem key={ id }>
                <TodoListItem
                { ...itemProps }/>
            </ListGroupItem>
        );
    })

   return (
    <ListGroup>
        { elements }
    </ListGroup>
   );
}

export default TodoList;
