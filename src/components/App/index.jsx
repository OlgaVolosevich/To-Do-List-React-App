import React, { Component } from 'react';
import classes from './app.module.scss';
import AppHeader from '../AppHeader';
import SearchPannel from '../SearchPannel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';

class App extends Component {

    state = {
        todos : [
            {label : 'Learn JS', important : false, id : 1},
            {label : 'Learn React', important : true, id : 2},
            {label : 'Learn Angular', important : false, id : 3}
        ]
    };

    maxId = this.state.todos.length;

    deleteItem = (id) => {
        this.setState(({ todos })=> {
            const filteredTodos = todos.filter((todo)=> todo.id !== id);
            return {
                todos : filteredTodos
            }
        })
    }

    addItem = (text) => {
        const newTodo = {
            label : text,
            important : false,
            id : ++this.maxId
        }

        this.setState(({ todos }) => {
            const modifiedTodoList = [...todos, newTodo];
            return {
                todos : modifiedTodoList
            }
        })
    }
   
    render () {
        return (
            <div className={classes.app}>
                <AppHeader toDo={3} done={0}/>
                <div className={classes.topPannel}>
                <SearchPannel/>
                <ItemStatusFilter/>
                </div>
                <TodoList todos={this.state.todos} onDeleted={this.deleteItem}/>
                <ItemAddForm addItem={this.addItem}/>
            </div>
        )
    }
}

export default App;