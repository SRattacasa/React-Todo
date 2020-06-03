// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'


const TodoList = (props) => { 
// class TodoList extends React.Component { 
//     render() {
        return (
          <div>
              {console.log('TEST', props.clearTodo)}
           {props.todo.map(
               todo => <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} clearTodo={props.clearToDo} /> 
           )}
            
            
            
            <button onClick={props.clearTodo}>Clear To Dos</button>
            
          </div>
        );
}


export default TodoList;