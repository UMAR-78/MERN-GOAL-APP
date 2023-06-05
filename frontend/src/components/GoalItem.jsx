import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  const formattedDate = goal.createdAt
    ? new Date(goal.createdAt).toLocaleString('en-US')
    : 'Invalid Date';
    console.log(goal.createdAt); // Check the value in the console

  return (
    <div className='goal'>
      <div className='para'>{formattedDate}</div>
      
      <h2 className='heading1'>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        <span>X</span> 
      </button>
    </div>
  );
}

export default GoalItem;
