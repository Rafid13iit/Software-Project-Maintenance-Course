# Modern Code Review Demo Project

A simple task management application built to demonstrate Modern Code Review (MCR) practices in a university assignment context.

## 📋 Project Overview

This is a minimal full-stack application featuring:
- **Backend**: FastAPI (Python) - RESTful API for task management
- **Frontend**: React (Vite) - Simple UI for viewing and creating tasks
- **Storage**: In-memory (no database)

## 🎯 Purpose

This repository serves as the **main branch** for MCR demonstrations. Team members will:
1. Fork or branch from this repository
2. Make improvements or add features
3. Submit Pull Requests
4. Participate in code review discussions
5. Merge approved changes

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Running the Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend will run at: `http://localhost:8000`

API Documentation: `http://localhost:8000/docs`

### Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at: `http://localhost:5173`

## 📁 Project Structure

```
.
├── backend/
│   └── app/
│       ├── main.py
│       ├── routes/
│       ├── models/
│       └── schemas/
└── frontend/
    └── src/
        ├── components/
        ├── services/
        ├── App.jsx
        └── main.jsx
```

## 🔍 Code Review Focus Areas

This codebase intentionally maintains simplicity to facilitate meaningful code reviews. Reviewers should consider:
- Code readability and clarity
- Function naming and structure
- Error handling
- Code documentation
- Best practices adherence

## 📝 Notes

- This is a demonstration project - production features like authentication, database persistence, and comprehensive error handling are intentionally omitted
- The focus is on clean, reviewable code rather than feature complexity
