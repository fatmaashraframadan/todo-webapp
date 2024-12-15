import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateTodoItemPage from "./pages/CreateTodoItemPage";
import ViewTodoItemsPage from "./pages/ViewTodoItemsPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/todos" element={<ViewTodoItemsPage />} />

      <Route path="/create" element={<CreateTodoItemPage />} />
    </Routes>
  </Router>
);

export default App;
