import './TodoForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [inputText, setInputText] = useState('');
  const [priority, setPriority] = useState('1');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    addTodo(inputText, priority);
    setInputText('');
    setPriority('1');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container input-container">
        <h2>Form to Add a Todo Item</h2>

        <div className="input-contents">
          <label>
            Add Todo Item:
            <textarea data-testid="create-todo-text" className="input-textbox"
            
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type what you need to do here"
            />
          </label>
        </div>

        <div className="option-placement">
          <h3>Priority Select:</h3>
          <select data-testid="create-todo-priority"
            value={priority} 
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        <div className="button-pos">
          <button data-testid='create-todo' className="input-button">Add to the mountain of tasks</button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
