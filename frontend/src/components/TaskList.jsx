import { useState } from 'react'

function TaskList({ tasks, onUpdate, onDelete, onToggleComplete }) {
  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [editDescription, setEditDescription] = useState('')

  if (tasks.length === 0) {
    return (
      <div className="task-list-container">
        <h2>Your Tasks</h2>
        <p className="empty-state">No tasks yet. Create one above!</p>
      </div>
    )
  }

  const handleEditClick = (task) => {
    setEditingId(task.id)
    setEditTitle(task.title)
    setEditDescription(task.description || '')
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditTitle('')
    setEditDescription('')
  }

  const handleSaveEdit = (taskId) => {
    onUpdate(taskId, {
      title: editTitle,
      description: editDescription
    })
    setEditingId(null)
  }

  const handleDeleteClick = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(taskId)
    }
  }

  return (
    <div className="task-list-container">
      <h2>Your Tasks ({tasks.length})</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            {editingId === task.id ? (
              <div className="task-edit-mode">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="edit-input"
                  placeholder="Task title"
                />
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="edit-textarea"
                  placeholder="Task description"
                  rows={2}
                />
                <div className="edit-actions">
                  <button onClick={() => handleSaveEdit(task.id)} className="save-btn">
                    Save
                  </button>
                  <button onClick={handleCancelEdit} className="cancel-btn">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="task-header">
                  <h3>{task.title}</h3>
                  <span 
                    className={`status ${task.completed ? 'completed' : 'pending'}`}
                    onClick={() => onToggleComplete(task.id, !task.completed)}
                    style={{ cursor: 'pointer' }}
                  >
                    {task.completed ? '✓ Complete' : '○ Pending'}
                  </span>
                </div>
                {task.description && (
                  <p className="task-description">{task.description}</p>
                )}
                <div className="task-actions">
                  <button onClick={() => handleEditClick(task)} className="edit-btn">
                    ✏️ Edit
                  </button>
                  <button onClick={() => handleDeleteClick(task.id)} className="delete-btn">
                    🗑️ Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList
