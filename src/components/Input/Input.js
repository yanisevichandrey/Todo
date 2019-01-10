import React, { Component } from 'react';
import './Input.css';

class Input extends Component {

    state = {
        title: ''
    }

    addNewTask = () => {
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    getNewTaskText = (e) => {
        this.setState({ title: e.target.value })
    }

    render() {
        return (
            <div className="input">
                <input type="text" value={this.state.title} placeholder="A new task..." onChange={this.getNewTaskText} />
                <button onClick={this.addNewTask}>Add</button>
            </div>
        )
    }
}

export default Input;
