import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import TodoListItem from '../TodoListItem';

const TodoList = ({ todos, onDeleted }) => {
    const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
        return (
            <ListGroupItem key={ id }>
                <TodoListItem
                { ...itemProps }
                onDeleted={()=>onDeleted(id)}/>
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
