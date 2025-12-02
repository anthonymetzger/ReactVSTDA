import './TodoItem.css'
import { FormCheck } from "react-bootstrap"; 
import { useState } from 'react';

function TodoItem({ todo, updateTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editPriority, setEditPriority] = useState(todo.priority);

  const handleSave = () => {
    updateTodo(todo.id, { text: editText, priority: editPriority });
    setIsEditing(false);
  }

  // Function to determine both background color and class name
  function getPriorityDetails(priority) {
    switch(priority) {
      case '1':
        return { color: 'lightcoral', className: 'priority-high' };
      case '2':
        return { color: 'lightgoldenrodyellow', className: 'priority-medium' };
      case '3':
        return { color: 'lightgreen', className: 'priority-low' };
      default:
        return { color: 'white', className: '' };
    }
  }

  const priorityDetails = getPriorityDetails(todo.priority);

  return (
    // This div includes both the data-testid and the dynamic className
    <div 
      className={`item-row ${priorityDetails.className}`}
      style={{ backgroundColor: priorityDetails.color } } 
      data-testid="todo-item" // <-- This is what the test is looking for
    >
      {isEditing ? (
        <>
          <textarea 
            data-testid="update-todo-text"
            className="edit-textarea"
            value={editText} 
            onChange={(e) => setEditText(e.target.value)}
            rows={10}
            cols={50}
          />
          <select 
            value={editPriority} 
            onChange={(e) => setEditPriority(e.target.value)}
          >
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
          <button data-testid='update-todo' onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => updateTodo(todo.id, { completed: !todo.completed })}
          />
          <h6>{todo.text}</h6>
          <p>Priority: {todo.priority}</p>
          <div className='button-group'>
            <button data-testid='edit-todo' className='button-align' onClick={() => setIsEditing(true)}>Edit</button>
            <button data-testid='delete-todo' className='button-align' onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;