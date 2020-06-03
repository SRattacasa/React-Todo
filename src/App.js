import React from 'react';
import TodoList from './components/TodoList'
import ListForm from './components/TodoForm'

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
     todos,
    };
  }

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleTodo = todoID => {
    console.log(todoID);
    // map over array
    // when we find the item we clicked, toggle the purchased field
    // otherwise return the item untouched
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoID === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  clearTodo = e => {
    e.preventDefault();
    
    // if item is purchased (item.purchased is true) then filter out
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  render() {
    
    return (
      <div className="App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <ListForm addTodo={this.addTodo} clearTodo={this.clearTodo}/>
        <TodoList todo={this.state.todos} toggleTodo={this.toggleTodo} clearTodo={this.clearTodo}/>

        
        
          
          
        </div>
      </div>
    );
  }
}


export default App;
