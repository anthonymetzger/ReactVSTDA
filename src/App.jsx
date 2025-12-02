import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  // Add your code here
  const [todos, setTodos] = useState([]);


  const addTodo = (text, priority) => {
    const newTodo = {
      id: Date.now(),
      text,
      priority,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, updatedFields) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, ...updatedFields } : todo
    ));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }



  return (
    <>
      <h1 className='clr'>Very Simple Todo App</h1>
        <div className='clr'>
          <div className='main'>
            <div className='input-placement input-container sep'>
              <TodoForm addTodo={addTodo}></TodoForm>
            </div>
            <div className='output-placement output-container sep'>
              <TodoList
                data-testid='todo-item' 
                todos={todos}
                updateTodo={updateTodo}
                editTodo={editTodo}
                deleteTodo={deleteTodo}>
              </TodoList>
            </div>
          </div>
        </div>
      {/* Add your code here */}
    </>
  )
}

export default App
