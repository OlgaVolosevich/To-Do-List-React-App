import React, { Component } from 'react';
import classes from './app.module.scss';
import AppHeader from '../AppHeader';
import SearchPannel from '../SearchPannel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

class App extends Component {
    
    state = {
        todos : [
            {label : 'Learn JS', important : false, id : 1},
            {label : 'Learn React', important : true, id : 2},
            {label : 'Learn Angular', important : false, id : 3}
        ]
    }

    deleteItem = (id) => {
        /*
        this.setState({todos : filteredTodos});*/
        this.setState(({ todos })=> {
            const filteredTodos = todos.filter((todo)=> todo.id !== id);
            return {
                todos : filteredTodos
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
            </div>
        )
    }
}

export default App;