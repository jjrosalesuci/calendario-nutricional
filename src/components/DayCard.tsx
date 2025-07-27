import React from 'react';
import { MealPlan } from '../data/mealPlans';

interface DayCardProps {
  dayName: string;
  meals: MealPlan;
}

const DayCard: React.FC<DayCardProps> = ({ dayName, meals }) => {
  return (
    <div className="day-card">
      <h3 className="day-title">{dayName}</h3>
      <div className="meals">
        <div className="meal">
          <h4 className="meal-type">🌅 Desayuno</h4>
          <p className="meal-description">{meals.breakfast}</p>
        </div>
        <div className="meal">
          <h4 className="meal-type">☀️ Almuerzo</h4>
          <p className="meal-description">{meals.lunch}</p>
        </div>
        <div className="meal">
          <h4 className="meal-type">🌙 Cena</h4>
          <p className="meal-description">{meals.dinner}</p>
        </div>
      </div>
    </div>
  );
};

export default DayCard;