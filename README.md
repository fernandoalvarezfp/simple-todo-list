# Simple Todo List

A simple and didactic React todo-list application built with React 19 and Vite. This project demonstrates fundamental React concepts including component composition, state management, and event handling.

## ✨ Features

- ✅ **Add Todos** - Create new tasks with a simple form
- ✅ **Edit Todos** - Inline editing with save/cancel options
- ✅ **Toggle Complete** - Mark tasks as done with a checkbox
- ✅ **Delete Todos** - Remove unwanted tasks
- 🎨 **Clean UI** - Simple, responsive design with smooth transitions

## 🛠️ Technologies

- **React 19.2** - Modern React with hooks
- **Vite 7.2** - Fast build tool and dev server
- **CSS3** - Component-scoped styling
- **ESLint** - Code quality and consistency

## 📂 Project Structure

```
src/
├── App.jsx              # Main app component with state management
├── App.css              # Global app styles
├── main.jsx             # Application entry point
├── index.css            # Base styles
└── components/
    ├── TodoForm.jsx     # Input form for adding todos
    ├── TodoForm.css     # Form component styles
    ├── TodoList.jsx     # List container component
    ├── TodoList.css     # List styles
    ├── TodoItem.jsx     # Individual todo item with actions
    └── TodoItem.css     # Todo item styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fernandoalvarezfp/simple-todo-list.git
cd simple-todo-list
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Learning Objectives

This project is designed to be **didactic** and demonstrates:

- **Component Architecture** - Separation of concerns with reusable components
- **State Management** - Using `useState` hook for managing todos
- **Props** - Passing data and callbacks between components
- **Event Handling** - Form submissions, button clicks, keyboard events
- **Conditional Rendering** - Toggle between view/edit modes
- **Array Methods** - Using `map`, `filter`, and array spread for state updates
- **Component Styling** - Individual CSS files for each component

## 🌿 Git Workflow

This project follows a **feature branch workflow** with conventional commits:

- Each feature developed on separate branch (`feat/*`)
- Merged to `main` using conventional commit messages
- Clean commit history showing development progression

**Branches:**
- `feat/project-setup` - Initial structure
- `feat/add-todo` - Add functionality
- `feat/display-todos` - List display
- `feat/toggle-todo` - Complete toggle
- `feat/delete-todo` - Delete functionality
- `feat/edit-todo` - Edit functionality

## 📄 License

This project is open source and available for learning purposes.

## 👤 Author

Fernando Álvarez (@fernandoalvarezfp)
