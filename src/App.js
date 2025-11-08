import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  // Create task
  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        createdAt: new Date().toLocaleString()
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Start editing
  const startEdit = (task) => {
    setEditingId(task.id);
    setEditingText(task.text);
  };

  // Save edit
  const saveEdit = (id) => {
    if (editingText.trim() !== '') {
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, text: editingText } : task
      ));
      setEditingId(null);
      setEditingText('');
    }
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const handleEditKeyPress = (e, id) => {
    if (e.key === 'Enter') {
      saveEdit(id);
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>📝 Todo List</h1>
        
        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new task..."
            className="task-input"
          />
          <button onClick={addTask} className="add-btn">
            Add Task
          </button>
        </div>

        <div className="tasks-section">
          {tasks.length === 0 ? (
            <p className="no-tasks">No tasks yet. Add one above!</p>
          ) : (
            <ul className="task-list">
              {tasks.map(task => (
                <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                  <div className="task-content">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleComplete(task.id)}
                      className="task-checkbox"
                    />
                    
                    {editingId === task.id ? (
                      <input
                        type="text"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        onKeyDown={(e) => handleEditKeyPress(e, task.id)}
                        className="edit-input"
                        autoFocus
                      />
                    ) : (
                      <div className="task-text-container">
                        <span className="task-text">{task.text}</span>
                        <span className="task-date">{task.createdAt}</span>
                      </div>
                    )}
                  </div>

                  <div className="task-actions">
                    {editingId === task.id ? (
                      <>
                        <button onClick={() => saveEdit(task.id)} className="save-btn">
                          ✓ Save
                        </button>
                        <button onClick={cancelEdit} className="cancel-btn">
                          ✕ Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => startEdit(task)} className="edit-btn">
                          ✏️ Edit
                        </button>
                        <button onClick={() => deleteTask(task.id)} className="delete-btn">
                          🗑️ Delete
                        </button>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="stats">
          <p>Total Tasks: {tasks.length}</p>
          <p>Completed: {tasks.filter(t => t.completed).length}</p>
          <p>Pending: {tasks.filter(t => !t.completed).length}</p>
        </div>
      </div>
    </div>
  );
}

export default App;