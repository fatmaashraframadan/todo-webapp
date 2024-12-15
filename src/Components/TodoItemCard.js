// TodoItemCard.jsx
import React from "react";

const TodoItemCard = ({ todo, onClick }) => {
  return (
    <div
      onClick={() => onClick(todo)}
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        width: "95%",
        height: "70px",
      }}
    >
      <h3>{todo.title}</h3>
      <p>{todo.description.substring(0, 50)}...</p>
    </div>
  );
};

export default TodoItemCard;
