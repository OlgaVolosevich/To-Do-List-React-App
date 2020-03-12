import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './TodoListItem.scss';

 class TodoListItem extends Component {

    state = {
        done: false,
    }

     onLabelClick = () => {
        /* this.setState ({
             done: !done
         })*/

         this.setState((state) => ({
            done: !state.done,
          }));
     }
    render () {
        const { done } = this.state;
        let classNames='';
        if (done) {
            classNames += 'done';
        }
        const { label, important=false } = this.props;
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
          }; 
    
        return (
            <span className='todoListItem'>
                <span className={classNames} style={style} onClick={this.onLabelClick}>
                    {label}
                </span>
                <Button outline color="success">
                    <i className="fa fa-exclamation" />
                </Button>
                <Button outline color="danger">
                    <i className="fa fa-trash-o" />
                </Button>
            </span>);
    }
 }

export default TodoListItem;
