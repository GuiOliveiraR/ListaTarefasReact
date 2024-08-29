import React, { useState } from 'react';
import './App.css';


function App() {
  const [Tarefas, setTarefa] = useState([]);
  const [newTarefa, setNewTarefa] = useState('');

  const addTarefa = () => {
    if (newTarefa.trim()) {
      setTarefa([...Tarefas, { text: newTarefa, completed: false }]);
      setNewTarefa('');
    }
  };

  const toggleCompletion = (index) => {
    const newTarefa = Tarefas.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !Tarefas.completed };
      }
      return task;
    });
    setTarefa(newTarefa);
  };

  const removeTask = (index) => {
    const newTarefa = Tarefas.filter((_, i) => i !== index);
    setTarefa(newTarefa);
  };

  return (
    <div className="App">
      <h1> Lista de Tarefas</h1>
      <p>Aqui você pode adicionar, marcar e remover suas tarefas</p>
      <input
        type="text"
        value={newTarefa}
        onChange={(e) => setNewTarefa(e.target.value)}
      />
      <button onClick={addTarefa}>Adicionar Tarefa</button>
      <ul>
        {Tarefas.map((Tarefas, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={Tarefas.completed}
              onChange={() => toggleCompletion(index)}
            />
            {Tarefas.text}
            <button onClick={() => removeTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
