# Todo-List App Implementation Plan

## Problem Statement
Implement a simple, didactic React todo-list application with the following features:
- Add new todos
- Edit existing todos
- Mark todos as complete/incomplete (toggle)
- Delete todos

## Approach
Build a clean, well-organized React app using multiple components with separate CSS files for each component. The focus is on being didactic and demonstrating React best practices.

## Git Workflow
Each functionality is developed on its own feature branch and merged to `main` using **conventional commits**.

### Branch Strategy
| Branch | Purpose |
|--------|---------|
| `main` | Production-ready code |
| `feat/project-setup` | Initial structure & components folder |
| `feat/add-todo` | TodoForm component (add functionality) |
| `feat/display-todos` | TodoList & TodoItem components (display) |
| `feat/toggle-todo` | Mark todos complete/incomplete |
| `feat/delete-todo` | Delete todo functionality |
| `feat/edit-todo` | Edit todo functionality |

### Conventional Commits Format
- `feat: description` - New feature
- `style: description` - Styling changes
- `refactor: description` - Code refactoring
- `chore: description` - Maintenance tasks

## Project Structure
```
src/
├── App.jsx
├── App.css
├── main.jsx
├── index.css
└── components/
    ├── TodoForm.jsx
    ├── TodoForm.css
    ├── TodoList.jsx
    ├── TodoList.css
    ├── TodoItem.jsx
    └── TodoItem.css
```

## Component Responsibilities
- **App.jsx**: Main container, holds todo state, provides CRUD handlers
- **TodoForm.jsx**: Input form to add new todos
- **TodoList.jsx**: Container that renders list of TodoItem components
- **TodoItem.jsx**: Individual todo with complete toggle, edit, and delete actions

## Workplan

### 1. Project Setup (`feat/project-setup` → merge to `main`)
- [ ] Initialize git repository
- [ ] Create initial commit on `main`
- [ ] Create `feat/project-setup` branch
- [ ] Create `src/components/` folder structure
- [ ] Create placeholder component files
- [ ] Commit: `feat: add components folder structure`
- [ ] Merge to `main`

### 2. Add Todo (`feat/add-todo` → merge to `main`)
- [ ] Create `feat/add-todo` branch from `main`
- [ ] Implement TodoForm.jsx (input + submit)
- [ ] Implement TodoForm.css
- [ ] Add todos state & addTodo handler in App.jsx
- [ ] Commit: `feat: implement add todo functionality`
- [ ] Merge to `main`

### 3. Display Todos (`feat/display-todos` → merge to `main`)
- [ ] Create `feat/display-todos` branch from `main`
- [ ] Implement TodoList.jsx (renders list)
- [ ] Implement TodoList.css
- [ ] Implement TodoItem.jsx (displays single todo)
- [ ] Implement TodoItem.css
- [ ] Wire up in App.jsx
- [ ] Commit: `feat: implement todo list display`
- [ ] Merge to `main`

### 4. Toggle Todo (`feat/toggle-todo` → merge to `main`)
- [ ] Create `feat/toggle-todo` branch from `main`
- [ ] Add toggleTodo handler in App.jsx
- [ ] Add checkbox/toggle UI in TodoItem.jsx
- [ ] Style completed state in TodoItem.css
- [ ] Commit: `feat: implement toggle todo complete`
- [ ] Merge to `main`

### 5. Delete Todo (`feat/delete-todo` → merge to `main`)
- [ ] Create `feat/delete-todo` branch from `main`
- [ ] Add deleteTodo handler in App.jsx
- [ ] Add delete button in TodoItem.jsx
- [ ] Commit: `feat: implement delete todo`
- [ ] Merge to `main`

### 6. Edit Todo (`feat/edit-todo` → merge to `main`)
- [ ] Create `feat/edit-todo` branch from `main`
- [ ] Add editTodo handler in App.jsx
- [ ] Add edit mode UI in TodoItem.jsx (toggle between view/edit)
- [ ] Style edit mode in TodoItem.css
- [ ] Commit: `feat: implement edit todo`
- [ ] Merge to `main`

### 7. Final Polish
- [ ] Verify all features work correctly
- [ ] Update App.css with final styling

## Technical Notes
- Use `useState` hook for state management
- Generate unique IDs with `Date.now()` or `crypto.randomUUID()`
- Each component has its own CSS file (best practice for maintainability)
- Keep styling minimal and clean for didactic clarity
