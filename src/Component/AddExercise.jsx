import React, { useState } from 'react';

function ExerciseForm() {
  const [muscleName, setMuscleName] = useState('');
  const [exerciseName, setExerciseName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      muscleName,
      exerciseName,
      imgUrl,
      reps,
    });
    setMuscleName('');
    setExerciseName('');
    setImgUrl('');
    setReps('');
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontFamily: 'sans-serif',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '3px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  };

  return (
    <div style={formStyle}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="muscleName" style={labelStyle}>
            Muscle Name:
          </label>
          <input
            type="text"
            id="muscleName"
            value={muscleName}
            onChange={(e) => setMuscleName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="exerciseName" style={labelStyle}>
            Exercise Name:
          </label>
          <input
            type="text"
            id="exerciseName"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="imgUrl" style={labelStyle}>
            Image URL:
          </label>
          <input
            type="url"
            id="imgUrl"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="reps" style={labelStyle}>
            Reps:
          </label>
          <input
            type="number"
            id="reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ExerciseForm;