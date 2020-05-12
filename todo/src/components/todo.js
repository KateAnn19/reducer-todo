import React, {useReducer} from 'react';
import { formReducer, initialState } from "../reducers/reducer";

const Todo = props => {

    console.log("$$$$$$", props.id)
    
    const [dispatch] = useReducer(formReducer, initialState)
    return (
        
         <div onClick={() => props.dispatch({type: "TOGGLE_TODO", id: props.id})}
         className={`task ${props.task.completed ? ' completed' : ''}`}>
        <p>{props.task.name}</p>
        <button className="clear-btn" onClick={() => props.dispatch({type: "REMOVE", id: props.id})}>
        Clear Done
      </button>
        </div>

    );
};

export default Todo;