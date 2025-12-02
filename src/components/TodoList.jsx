import './TodoList.css'
import TodoItem from './TodoItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function TodoList({ todos, updateTodo, deleteTodo, editTodo }) {



  return (
    <>
      <div className='list-div container '>
        <h2 >This is the list of stuff you have to do...</h2>
        {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          editTodo={editTodo}
          updateTodo={updateTodo} 
          deleteTodo={deleteTodo} 
  />
        ))}    
      </div>
      {/* Add your components here */}
    </>
  );
}

export default TodoList;
