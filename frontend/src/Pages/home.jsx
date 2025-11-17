import { useEffect } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext"

// Components
import WorkoutDetails from "../components/workoutDetails";
import WorkoutForm from "../components/workoutForm";

function Home() {
  const { workouts, dispatch } = useWorkoutContext(); 
  const {user} = useAuthContext()
  const API_URL = import.meta.env.VITE_API_URL || ''

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`${API_URL}/api/workouts`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    if (user){
      fetchWorkouts();}
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}

export default Home;
