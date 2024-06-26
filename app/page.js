'use client';

import React, { useState } from 'react';
import styles from './sytyles/home.module.css';

const Page = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>오늘 할일 체크</h1>
      <div className={styles.inputContainer}>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          className={styles.input}
        />
        <button onClick={handleAddTask} className={styles.button}>Add</button>
      </div>
      <ul className={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} className={styles.listItem}>
            {task}
            <button onClick={() => handleDeleteTask(index)} className={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
