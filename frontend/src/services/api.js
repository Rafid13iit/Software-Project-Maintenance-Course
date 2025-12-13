const API_BASE_URL = 'http://localhost:8000'

export async function fetchTasks() {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching tasks:', error)
    return []
  }
}

export async function createTask(taskData) {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    })
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error creating task:', error)
    return null
  }
}

export async function updateTask(taskId, taskData) {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    })
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error updating task:', error)
    return null
  }
}

export async function deleteTask(taskId) {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: 'DELETE',
    })
    
    if (response.ok) {
      return true
    }
    return false
  } catch (error) {
    console.error('Error deleting task:', error)
    return false
  }
}
