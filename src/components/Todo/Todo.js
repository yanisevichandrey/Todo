import React from 'react';
import './Todo.css'

const todo = (props) => {
    return (
        <div className="todo">
            <div className="todo_title">
                <input onChange={props.changeCompletedHandler} type="checkbox"></input>
                <div style={{textDecoration: props.completed ? 'line-through' : 'none'}}>{props.title}</div>
            </div>
            <div className="blockBtn">
                <button onClick={props.deleteHandler}>x</button>
            </div>
        </div>
    )
}

export default todo;