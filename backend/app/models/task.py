from typing import Optional


class Task:
    
    def __init__(
        self, 
        id: int, 
        title: str, 
        description: Optional[str] = None, 
        completed: bool = False
    ):
        self.id = id
        self.title = title
        self.description = description
        self.completed = completed
    
    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "completed": self.completed
        }
