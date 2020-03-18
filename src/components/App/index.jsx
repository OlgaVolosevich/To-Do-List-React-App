import React, { Component } from 'react';
import classes from './app.module.scss';
import AppHeader from '../AppHeader';
import SearchPannel from '../SearchPannel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';

class App extends Component {

    maxId = 100;

    state = {
        todos : [
            this.createNewTodo('Learn JS'),
            this.createNewTodo('Learn React'),
            this.createNewTodo('Learn Angular'),
        ],
        searchValue : ''
    };

    createNewTodo (label) {
        return {
            label,
            important : false,
            id : this.maxId++,
            done : false
        }
    }

    deleteItem = (id) => {
        this.setState(({ todos })=> {
            const filteredTodos = todos.filter((todo)=> todo.id !== id);
            return {
                todos : filteredTodos
            }
        })
    }

    addItem = (text) => {
        const newTodo = this.createNewTodo(text);

        this.setState(({ todos }) => {
            const modifiedTodoList = [...todos, newTodo];
            return {
                todos : modifiedTodoList
            }
        })
    }

    toggleProperty (property, array, id) {
            let oldItem = array.filter((item)=> item.id === id)[0];
            let index = array.findIndex((item)=>item.id === id);
            let modifiedItem = {...oldItem, [property] : !oldItem[property]};
            
            let modifiedArray = [...array];
            modifiedArray.splice(index,1,modifiedItem);
            return modifiedArray

    }

    onToggleImportant = (id) => {
        this.setState(({ todos }) => {
            return {
                todos : this.toggleProperty('important', todos, id)
            }
        });
    }
    
    onToggleDone = (id) => {
        this.setState(({ todos }) => {
            return {
                todos : this.toggleProperty('done', todos, id)
            }
        });
    }

    search (array, value) {
        return value.length ? 
        array.filter((item) => item.label.toLowerCase().includes(value.toLowerCase())) 
        : 
        array;
    }

    onSearchChange = (value) => {
        this.setState({
            searchValue : value
        })
    }
   
    render () {
        const { todos, searchValue } = this.state;
        const filteredTodos = this.search(todos, searchValue);
        const totalDone = todos.filter((todo) => todo.done).length;
        const totalUndone = todos.length - totalDone;
        return (
            <div className={classes.app}>
                <AppHeader toDo={totalUndone} done={totalDone}/>
                <div className={classes.topPannel}>
                <SearchPannel onSearchChange={this.onSearchChange}/>
                <ItemStatusFilter/>
                </div>
                <TodoList 
                todos={filteredTodos} 
                onDeleted={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}/>
                <ItemAddForm addItem={this.addItem}/>
            </div>
        )
    }
}

export default App;