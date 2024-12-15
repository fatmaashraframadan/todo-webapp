import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTodoItemPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    DueDate: "",
    Priority: 2,  // Default priority set to 2 (Medium)
    IsCompleted: false,  // Default to false
    CreatorId: "f7c3d39a-8b79-47b9-a7f8-3c9ed8c9d2d5",  // Replace with actual CreatorId
    Assignees: [
      {
        Id: "a1c9a342-ada2-423f-b2f7-ea9b27a4fe01",  // Replace with actual Assignee ID
        Name: "John Doe",
        Email: "johndoe@example.com",
      },
    ],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure DueDate is in the correct format
    const updatedFormData = {
      ...formData,
      DueDate: new Date(formData.DueDate).toISOString(),  // Convert date to ISO string
      Priority: parseInt(formData.Priority),  // Ensure Priority is a number
    };

    // Assuming you have an API to handle data creation
    try {
      const response = await fetch("http://localhost:5276/api/add-todo-item/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) {
        alert("Item created successfully!");
        navigate("/"); // Redirect to the home page or another page
      } else {
        alert("Failed to create item");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Create New Item</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="title" style={{ display: "block", marginBottom: "5px" }}>
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="description"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box", height: "100px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="DueDate" style={{ display: "block", marginBottom: "5px" }}>
            Due Date
          </label>
          <input
            type="date"
            id="DueDate"
            name="DueDate"
            value={formData.DueDate}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="Priority" style={{ display: "block", marginBottom: "5px" }}>
            Priority
          </label>
          <select
            id="Priority"
            name="Priority"
            value={formData.Priority}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          >
            <option value={1}>High</option>
            <option value={2}>Medium</option>
            <option value={3}>Low</option>
          </select>
        </div>
        <button
          type="submit"
          style={{ padding: "10px 15px", background: "#4CAF50", color: "#fff", border: "none", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTodoItemPage;
