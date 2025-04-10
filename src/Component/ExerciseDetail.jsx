import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';  //on click link in button

const ExerciseCard = () => {
  function capitalizeFirstLetter(str) {
    return str.replace(/^\w/, (c) => c.toUpperCase());
  }

  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      var Data = await fetch("http://localhost:5000/datas/exercises", {
        method: "POST",
      });
      Data = await Data.json();
      setExerciseData(Data);
    };

    fetchExerciseData();
  }, []);

  // const navigate = useNavigate(); // use link on on click
  return (
    <>
      <div className="Exercise-detail-main">
        {exerciseData.map((el, index) => (
          <div key={index} className="main_all_muscle">
            <div className="">
              <h2>{capitalizeFirstLetter(el.muscle_group)}</h2>
              {el.exercises.map((card, index) => (
                <div key={index} className="exercise-card">
                  <div className="exercise-title">{card.name}</div>

                  <img src={card.image_url} className="exercise-image" alt="" />

                  <p><strong>Description:</strong> {card.details.description}</p>
                  <p><strong>Equipment:</strong> {card.details.equipment_needed}</p>
                  <p><strong>Difficulty:</strong> {card.details.difficulty_level}</p>
                  <p><strong>Reps:</strong> {card.details.recommended_reps}</p>
                </div>
              ))}
       
            </div>
          </div>
        ))}
      </div>
    </>

    
  );
};

export default ExerciseCard;
