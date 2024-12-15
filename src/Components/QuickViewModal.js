// QuickViewModal.jsx
import React from "react";
import { format } from 'date-fns';

const QuickViewModal = ({ todo, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <p><strong>Due Date:</strong> {format(new Date(todo.dueDate), 'MMMM dd, yyyy')}</p>  
        <p><strong>Status:</strong> {todo.isCompleted ? "Completed" : "In progress"}</p>
        <button
          onClick={onClose}
          style={{
            padding: "10px 15px",
            backgroundColor: "#ff3b3b",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default QuickViewModal;
