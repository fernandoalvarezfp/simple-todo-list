import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos }) {
  if (todos.length === 0) {
    return <p className="empty-message">No todos yet. Add one to get started!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
