import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitTodo = e => {
    e.preventDefault();
    this.setState({ todo: '' });
    this.props.addTodo(e, this.state.todo);
    
  };

  render() {
    
    return (
        <div>
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          value={this.state.todo}
          name="todo"
          onChange={this.handleChanges}
        />
        
        <button>Add</button>
      </form>

        
        
        </div>
    );
  }
}

export default TodoForm;
