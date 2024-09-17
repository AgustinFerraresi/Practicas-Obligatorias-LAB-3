import { useState } from 'react'
import NewTask from './components/newTask/NewTask'
import List from './components/List/List'

import React from 'react'
import './App.css'




function App() {
  const [tasks,setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks(prevTasks => [newTask, ...prevTasks]);
  }
  
  return (
    <>
      <NewTask handleAddTask={handleAddTask}/>
      <List tasks={tasks}/>
    </>
  )
}

export default App
