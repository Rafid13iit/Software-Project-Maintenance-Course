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
      <div className="task-form-header">
        <h2>✨ Create New Task</h2>
        <p>Add a new task to your productivity list</p>
      </div>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="title">
            <span className="label-text">Task Title</span>
            <span className="required-indicator">*</span>
          </label>
          <div className="input-wrapper">
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What needs to be done?"
              maxLength={100}
              required
              className="form-input"
            />
            <div className="char-count">{title.length}/100</div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">
            <span className="label-text">Description</span>
            <span className="optional-text">(optional)</span>
          </label>
          <div className="input-wrapper">
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add some details about this task..."
              maxLength={500}
              rows={4}
              className="form-textarea"
            />
            <div className="char-count">{description.length}/500</div>
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={!title.trim()}>
          <span className="btn-icon">➕</span>
          <span>Add Task</span>
        </button>
      </form>
    </div>
  )
}

export default TaskForm
