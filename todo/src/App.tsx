import React, { useState } from 'react';
import './App.css';

interface Todo {
  id: number;
  text: string;
  difficulty: string;
  date: string;
  topic: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('Easy');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDifficulty(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTopic(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        difficulty: selectedDifficulty,
        date: selectedDate,
        topic: selectedTopic,
      };

      setTodos([...todos, newTodo]);
      setInputValue('');
      setSelectedDifficulty('Easy');
      setSelectedDate('');
      setSelectedTopic('');
    }
  };

  const handleDeleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1 className="title">ToDo App</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a task"
          className="input"
        />
        <select
          value={selectedDifficulty}
          onChange={handleDifficultyChange}
          className="select"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="date-input"
        />
        <select
          value={selectedTopic}
          onChange={handleTopicChange}
          className="select"
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>
        <button onClick={handleAddTodo} className="add-button">
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <div>
              <span>{todo.text}</span>
              <span className="difficulty">Difficulty: {todo.difficulty}</span>
              <span className="date">Date: {todo.date}</span>
              <span className="topic">Topic: {todo.topic}</span>
            </div>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
