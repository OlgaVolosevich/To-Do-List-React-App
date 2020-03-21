import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import TodoListItem from '../TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
    const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
        return (
            <ListGroupItem key={ id }>
                <TodoListItem
                { ...itemProps }
                onDeleted={()=>onDeleted(id)}
                onToggleImportant={()=> onToggleImportant(id)}
                onToggleDone={()=>onToggleDone(id)}/>
            </ListGroupItem>
        );
    })

   return (
    <ListGroup className='listGroup'>
        { elements }
    </ListGroup>
   );
}

export default TodoList;
