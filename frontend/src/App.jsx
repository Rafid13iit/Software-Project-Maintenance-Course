import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { fetchTasks, createTask, updateTask, deleteTask } from './services/api'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    setLoading(true)
    const data = await fetchTasks()
    setTasks(data)
    setLoading(false)
  }

  const handleAddTask = async (taskData) => {
    const newTask = await createTask(taskData)
    if (newTask) {
      setTasks([...tasks, newTask])
    }
  }

  const handleUpdateTask = async (taskId, taskData) => {
    const updatedTask = await updateTask(taskId, taskData)
    if (updatedTask) {
      setTasks(tasks.map(task => 
        task.id === taskId ? updatedTask : task
      ))
    }
  }

  const handleDeleteTask = async (taskId) => {
    const success = await deleteTask(taskId)
    if (success) {
      setTasks(tasks.filter(task => task.id !== taskId))
    }
  }

  const handleToggleComplete = async (taskId, completed) => {
    const updatedTask = await updateTask(taskId, { completed })
    if (updatedTask) {
      setTasks(tasks.map(task => 
        task.id === taskId ? updatedTask : task
      ))
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Task Management</h1>
        <p>Modern Code Review Demo Project</p>
      </header>

      <main className="app-main">
        <TaskForm onSubmit={handleAddTask} />
        
        {loading ? (
          <p>Loading tasks...</p>
        ) : (
          <TaskList 
            tasks={tasks} 
            onUpdate={handleUpdateTask}
            onDelete={handleDeleteTask}
            onToggleComplete={handleToggleComplete}
          />
        )}
      </main>
    </div>
  )
}

export default App
