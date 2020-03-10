import React from 'react';
import classes from './appHeader.module.scss';

const AppHeader = ({ toDo, done }) => {
    return (
        <div className={classes.appHeader}>
            <h1>My todo list</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    );
}

export default AppHeader;