import React from 'react';
import AppHeader from '../AppHeader';
import SearchPannel from '../SearchPannel';
import TodoList from '../TodoList';

const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPannel/>
            <TodoList/>
        </div>
    )
}

export default App;