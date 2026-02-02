import "./TodoItem.css";

function TodoItem({ todo }) {
  return (
    <li className="todo-item">
      <span className="todo-text">{todo.text}</span>
    </li>
  );
}

export default TodoItem;
