import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import TodoList from "./Pages/TodoList";
import Counter from "./Pages/counter.jsx";
import Login from "./Pages/Login.jsx";
import Button from "./Pages/Button.jsx";
import Parent from "./Pages/Parent.jsx";
import Pagination from './Pages/Pagination.jsx';
import { data } from "./data/items.js";
import { CssBaseline } from "@mui/material";
import UseMemo from "./pages/UseMemo.jsx";
import UseCallback from "./pages/UseCallback.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PublicPage from "./pages/PublicPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";


function App() {
  return (
    <>
      <CssBaseline /> {/* This helps with baseline styles and dark mode */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/pagination" element={<Pagination data={data} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/button" element={<Button />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/calculation" element={<UseMemo />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/publicpage" element={<PublicPage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;