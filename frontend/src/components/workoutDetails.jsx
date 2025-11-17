import {useWorkoutContext} from '../hooks/useWorkoutsContext'
import {Trash2} from "lucide-react"
import { useAuthContext } from '../hooks/useAuthContext'

//date fns
import {formatDistanceToNow} from 'date-fns'

function WorkoutDetails ({workout}){
    const {dispatch} = useWorkoutContext()
    const { user } = useAuthContext()
    const API_URL = import.meta.env.VITE_API_URL || ''

    const handleClick = async () =>{

        if(!user){
            return
        }

        const response = await await fetch(`${API_URL}/api/workouts/${workout._id}`, {
            method: 'Delete',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
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
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
            <span onClick={handleClick}>
                <Trash2 className="w-5 h-5 text-red-500 cursor-pointer" />    
            </span>
        </div>
    )

    
}

export default WorkoutDetails