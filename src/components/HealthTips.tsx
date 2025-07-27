import React, { useState } from 'react';
import { healthTips } from '../data/mealPlans';

const HealthTips: React.FC = () => {
  const [currentTip, setCurrentTip] = useState(0);

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % healthTips.length);
  };

  const prevTip = () => {
    setCurrentTip((prev) => (prev - 1 + healthTips.length) % healthTips.length);
  };

  return (
    <div className="health-tips">
      <h2 className="tips-title">💡 Consejo Saludable</h2>
      <div className="tip-container">
        <button onClick={prevTip} className="tip-nav-btn" aria-label="Consejo anterior">
          ‹
        </button>
        <p className="tip-text">{healthTips[currentTip]}</p>
        <button onClick={nextTip} className="tip-nav-btn" aria-label="Siguiente consejo">
          ›
        </button>
      </div>
      <div className="tip-indicator">
        {currentTip + 1} de {healthTips.length}
      </div>
    </div>
  );
};

export default HealthTips;