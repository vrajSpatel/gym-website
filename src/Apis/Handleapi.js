// Simulated API response
const apiResponse = `{"success":true,"data":{"exercises":[{"id":1,"name":"Push-ups","bodyPart":"chest","description":"A push-up is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids.","difficulty":"beginner"},{"id":2,"name":"Squats","bodyPart":"legs","description":"The squat is a dynamic strength training exercise that requires several muscles in your upper and lower body to work together simultaneously.","difficulty":"beginner"},{"id":3,"name":"Deadlifts","bodyPart":"back","description":"The deadlift is a weight training exercise in which a loaded barbell or bar is lifted off the ground to the level of the hips, then lowered back to the ground.","difficulty":"intermediate"},{"id":4,"name":"Bicep Curls","bodyPart":"arms","description":"Bicep curls are a resistance exercise that works the muscles of the upper arm, and to a lesser extent, the lower arm. They're a great way to strengthen the arm muscles in a way that's functional and mimics everyday activities.","difficulty":"beginner"},{"id":5,"name":"Planks","bodyPart":"core","description":"The plank is an isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time.","difficulty":"beginner"}]}}`;

// Parsing the JSON to an object
const exerciseData = JSON.parse(apiResponse);

// Example: Logging exercises for the legs
console.log("Leg Exercises:");
exerciseData.data.exercises.forEach((exercise) => {
  if (exercise.bodyPart === "legs") {
    console.log(`${exercise.name}: ${exercise.description}`);
  }
});
