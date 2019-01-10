import React from 'react';
import Todo from '../Todo/Todo'

const todos = (props) => {
    return(
        <div className="todos">
            {
                props.todos.map((todo) => {
                    return <Todo 
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        changeCompletedHandler={props.changeCompletedHandler(todo.id)}
                        deleteHandler={props.deleteHandler(todo.id)}/>
                })
            }
        </div>
    )
}

export default todos;
