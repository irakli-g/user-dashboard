import React from "react";
import "./css/App.css";
import Home from "./pages/Home";
import UserSettings from "./pages/UserSettings";
import { Routes, Route } from "react-router-dom";
import Message from "./components/Message";
import Permissions from "./pages/Permissions";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <>
      <Menu />
      <Message />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserSettings />} />
        <Route path="/permissions" element={<Permissions />} />
      </Routes>
    </>
  );
};

export default App;
