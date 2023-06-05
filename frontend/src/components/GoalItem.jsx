import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div className='para'>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2 className='heading1'>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default GoalItem
