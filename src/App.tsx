import React from "react";
import "./css/App.css";
import Home from "./pages/Home";
import UserSettings from "./pages/UserSettings";
import { Routes, Route } from "react-router-dom";
import Message from "./components/Message";

const App: React.FC = () => {
  return (
    <main>
      <Message />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-settings" element={<UserSettings />} />
      </Routes>
    </main>
  );
};

export default App;
