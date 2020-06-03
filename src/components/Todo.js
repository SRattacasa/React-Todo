import React from 'react';

const Todo = (props) => {
    return (
    <div className="someClass" onClick={() => props.toggleTodo(props.todo.id)}>
        
    <h3>{props.todo.task}</h3>
    </div>
    )
        
    
};

export default Todo