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

  const handleDelete = (deleteTask) => {
    const tasksFiltered =  tasks.filter(task => task != deleteTask);
    setTasks(tasksFiltered);
  }
  

  //        const tasksFiltered = tasks.filter(task => task.key !== key)

  return (
    <>
      <NewTask handleAddTask={handleAddTask}/>
      <List tasks={tasks} handleDelete={handleDelete}/>
    </>
  )
}

export default App
