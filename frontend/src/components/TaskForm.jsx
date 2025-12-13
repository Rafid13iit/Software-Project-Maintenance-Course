import { useState } from 'react'

function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!title.trim()) {
      return
    }

    const taskData = {
      title: title.trim(),
      description: description.trim(),
      completed: false
    }

    onSubmit(taskData)

    setTitle('')
    setDescription('')
  }

  return (
    <div className="task-form-container">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            maxLength={100}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description (optional)"
            maxLength={500}
            rows={3}
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Task
        </button>
      </form>
    </div>
  )
}

export default TaskForm
