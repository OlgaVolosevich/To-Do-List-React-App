import React from 'react';
import './appHeader.scss';

const AppHeader = ({ toDo, done }) => {
    return (
        <div className='appHeader'>
            <h1>My todo list</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    );
}

export default AppHeader;