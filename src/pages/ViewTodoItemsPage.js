import React, { useState, useEffect } from "react";
import TodoItemCard from "../Components/TodoItemCard";  // A card component for displaying todo items
import QuickViewModal from "../Components/QuickViewModal";  // A modal component for displaying a quick view of a todo item

const ViewTodoItemsPage = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  // Fetch the todos from the backend API
  useEffect(() => {
    const fetchTodos = async () => {
      console.log("testsss");
      try {
        const response = await fetch("http://localhost:5276/api/todo-items",{
          method: "GET",
          headers: {
            "Cache-Control": "no-cache", // Disable cache
            "Pragma": "no-cache", // Disable cache for HTTP 1.0
            "Expires": "0", // Force expiration
          },
        });
        const data = await response.json();
        setTodos(data);
        console.log("Todos fetched:", data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const handleCardClick = (todo) => {
    setSelectedTodo(todo);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {todos.map((todo) => (
        <TodoItemCard key={todo.id} todo={todo} onClick={handleCardClick} />
      ))}
      {selectedTodo && <QuickViewModal todo={selectedTodo} onClose={() => setSelectedTodo(null)} />}
    </div>
  );
};

export default ViewTodoItemsPage;
