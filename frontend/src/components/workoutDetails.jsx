import {useWorkoutContext} from '../hooks/useWorkoutsContext'

function WorkoutDetails ({workout}){
    const {dispatch} = useWorkoutContext()

    const handleClick = async () =>{
        const response = await await fetch(`/api/workouts/${workout._id}`, {
            method: 'Delete'
        })
        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong> {workout.load}</p>
            <p><strong>reps: </strong> {workout.reps}</p>
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )

    
}

export default WorkoutDetails