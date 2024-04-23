import React, { useState } from 'react';
import './intrn.css';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [calories, setCalories] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setBmi(bmi.toFixed(2));

      // Basic calorie recommendation based on BMI
      let recommendedCalories;
      if (bmi < 18.5) {
        recommendedCalories = 2500; // Underweight
      } else if (bmi >= 18.5 && bmi < 24.9) {
        recommendedCalories = 2200; // Normal weight
      } else if (bmi >= 25 && bmi < 29.9) {
        recommendedCalories = 2000; // Overweight
      } else {
        recommendedCalories = 1800; // Obese
      }

      setCalories(recommendedCalories);
    }
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator & Calorie Recommendation</h2>
      <div>
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI and Calories</button>
      {bmi && (
        <div>
          <p>Your BMI: {bmi}</p>
          <p>Recommended Daily Calories: {calories} kcal</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
