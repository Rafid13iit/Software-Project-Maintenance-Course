from pydantic import BaseModel, Field
from typing import Optional


class TaskCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=100, description="Task title")
    description: Optional[str] = Field(None, max_length=500, description="Task description")
    completed: bool = Field(default=False, description="Task completion status")


class TaskUpdate(BaseModel):
    title: Optional[str] = Field(None, min_length=1, max_length=100, description="Task title")
    description: Optional[str] = Field(None, max_length=500, description="Task description")
    completed: Optional[bool] = Field(None, description="Task completion status")


class TaskResponse(BaseModel):
    id: int
    title: str
    description: Optional[str]
    completed: bool
    
    class Config:
        from_attributes = True
