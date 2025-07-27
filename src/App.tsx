import React, { useState } from 'react';
import './App.css';
import DayCard from './components/DayCard';
import HealthTips from './components/HealthTips';
import { weeklyMealPlan, daysOfWeek } from './data/mealPlans';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const refreshPlan = () => {
    // Simple refresh simulation - in a real app, this could rotate through different meal plans
    window.location.reload();
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <div className="header-content">
          <h1>🥗 Calendario Nutricional</h1>
          <p className="subtitle">Plan semanal de comidas saludables para prevenir obesidad, cáncer y diabetes</p>
          <div className="header-controls">
            <button onClick={refreshPlan} className="refresh-btn">
              🔄 Refrescar Plan
            </button>
            <button onClick={toggleDarkMode} className="theme-toggle">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <HealthTips />
        
        <section className="weekly-plan">
          <h2>📅 Plan Semanal</h2>
          <div className="days-grid">
            {daysOfWeek.map((day) => (
              <DayCard
                key={day.key}
                dayName={day.name}
                meals={weeklyMealPlan[day.key as keyof typeof weeklyMealPlan]}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>💚 Alimentación saludable para una vida mejor</p>
        <p className="disclaimer">
          * Consulta con un profesional de la salud antes de cambiar tu dieta
        </p>
      </footer>
    </div>
  );
}

export default App;
