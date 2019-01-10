import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './pages/About';
import Topics from './pages/Topics';
import Todos from './components/Todos/Todos';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import axios from 'axios';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=3')
      .then(res => this.setState({todos: res.data}))
  }

  changeCompletedHandler = (id) => () => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  deleteHandler = (id) => () => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
    // axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //   .then(res => this.setState({
    //     todos: [...this.state.todos.filter(todo => todo.id !== id)]
    //   }))
  }

  addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Input addTodo={this.addTodo} />
              <Todos
                todos={this.state.todos}
                changeCompletedHandler={this.changeCompletedHandler}
                deleteHandler={this.deleteHandler} />
            </React.Fragment>
          )}>
          </Route>
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />

        </div>
      </Router>
    );
  }
}

export default App;
