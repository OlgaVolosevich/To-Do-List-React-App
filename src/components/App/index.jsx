import React from 'react';
import classes from './app.module.scss';
import AppHeader from '../AppHeader';
import SearchPannel from '../SearchPannel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

const App = () => {
    
    const todos = [
        {label : 'Learn JS', important : false, id : 1},
        {label : 'Learn React', important : true, id : 2},
        {label : 'Learn Angular', important : false, id : 3}
    ]
    return (
        <div className={classes.app}>
            <AppHeader toDo={3} done={0}/>
            <div className={classes.topPannel}>
            <SearchPannel/>
            <ItemStatusFilter/>
            </div>
            <TodoList todos={todos}/>
        </div>
    )
}

export default App;