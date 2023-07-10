import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import ActivityPage from "../ActivityPage/ActivityPage";
import ExercisePage from "../ExercisePage/ExercisePage";
import NutritionPage from "../NutritionPage/NutritionPage";
import SleepPage from "../SleepPage/SleepPage";

function App() {
  const [appState, setAppState] = useState({});

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar user={appState.user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/activity"
            element={<ActivityPage appState={appState} setAppState={setAppState} />}
          />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/sleep" element={<SleepPage />} />
          <Route
            path="/login"
            element={<LoginForm setAppState={setAppState} />}
          />
          <Route
            path="/register"
            element={<RegistrationForm setAppState={setAppState} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
