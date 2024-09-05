import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Task2 from "./pages/Task2";
import Task1 from "./pages/Task1";
import { ColorModeContext } from "./ThemeContext";
import { Button } from "@mui/material";
import LoginPage from "./components/loginForm";

function App() {
  const colorMode = useContext(ColorModeContext);

  return (
    <div>
      <Button onClick={colorMode.toggleColorMode}>
        {colorMode.mode === "light" ? "Dark" : "Light"} Mode
      </Button>

      <Router>
        <Routes>
          <Route path="/" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
