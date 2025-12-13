from fastapi import APIRouter, HTTPException, status
from typing import List
from app.models.task import Task
from app.schemas.task import TaskCreate, TaskUpdate, TaskResponse

router = APIRouter()

tasks_db: List[Task] = []
task_id_counter = 1


@router.get("", response_model=List[TaskResponse], status_code=status.HTTP_200_OK)
def get_tasks():
    return [task.to_dict() for task in tasks_db]


@router.get("/{task_id}", response_model=TaskResponse, status_code=status.HTTP_200_OK)
def get_task(task_id: int):
    task = next((t for t in tasks_db if t.id == task_id), None)
    if not task:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")
    return task.to_dict()


@router.post("", response_model=TaskResponse, status_code=status.HTTP_201_CREATED)
def create_task(task_data: TaskCreate):
    global task_id_counter
    
    new_task = Task(
        id=task_id_counter,
        title=task_data.title,
        description=task_data.description,
        completed=task_data.completed
    )
    
    tasks_db.append(new_task)
    task_id_counter += 1
    
    return new_task.to_dict()


@router.put("/{task_id}", response_model=TaskResponse, status_code=status.HTTP_200_OK)
def update_task(task_id: int, task_data: TaskUpdate):
    task = next((t for t in tasks_db if t.id == task_id), None)
    if not task:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")
    
    if task_data.title is not None:
        task.title = task_data.title
    if task_data.description is not None:
        task.description = task_data.description
    if task_data.completed is not None:
        task.completed = task_data.completed
    
    return task.to_dict()


@router.delete("/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_task(task_id: int):
    global tasks_db
    task = next((t for t in tasks_db if t.id == task_id), None)
    if not task:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")
    
    tasks_db = [t for t in tasks_db if t.id != task_id]
    return None
