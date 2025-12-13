from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import tasks

app = FastAPI(
    title="Task Management API",
    description="A simple API for managing tasks",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(tasks.router, prefix="/tasks", tags=["tasks"])


@app.get("/")
def read_root():
    return {"message": "Task Management API is running"}
