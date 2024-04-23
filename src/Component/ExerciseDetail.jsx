import React from 'react';
import exerciseData from '../Apis/api.json';
import { useNavigate } from 'react-router-dom';  //on click link in button

const ExerciseCard = () => {
  const navigate = useNavigate(); // use link on on click
  return (
    <div className="Exercise-detail-main">
      {exerciseData.exercises.map((exercise, index) => (
        <div key={index} className='exercise-card'>
          <div className='exercise-title'>
            <h2>{exercise.name}</h2>
            <p><strong>Target:</strong> {exercise.target_body_part}</p>
            <img src={exercise.image_url} alt="imag of exercise"  className='exercise-image'/ >  
            <p><strong>Description:</strong> {exercise.details.description}</p>
            <p><strong>Equipment:</strong> {exercise.details.equipment_needed}</p>
            <p><strong>Difficulty:</strong> {exercise.details.difficulty_level}</p>
            <p><strong>Reps:</strong> {exercise.details.recommended_reps}</p>
          </div>
        </div>
      ))}
      <div className="add-yourexercise">
        <button className='Exercise-adder' onClick={()=>navigate("/addexercise")}>Add New Exercise</button>
      </div>
    </div>
  );
};

export default ExerciseCard;
