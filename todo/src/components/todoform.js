import React, { useState, useReducer} from 'react';
import {formReducer, initialState} from '../reducers/reducer';
import {TodoList} from './todolist';

const TodoForm = props => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [todo, setTask] = useState("");
  

  const handleChanges = e => {
    setTask(e.target.value);
   
  };
  //this is good for one input
  //multiple inputs is [e.targe.name]:e.target.value
  // setTask(e.target.value)
  //const[todo, setTask] = useState('');  string and not obkect in useState({})

  const handleSubmit = e => {
   e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo });
    setTask(""); //resets form back to empty string after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          type="text"
          name="task"
          onChange={handleChanges}
          value={todo}
        />
        {/* <button type="submit" onClick={() => dispatch({type: "ADD_TODO", payload:todo})}>Add</button> */}
        <button type="submit">Add</button>
        {/* <button type="submit" onClick={() => dispatch({type: "REMOVE", payload:todo})}>Clear</button> */}
        <TodoList state={state} dispatch={dispatch}/>
        {/* <TodoList/> */}
      </form>
    </div>
  );
};

export default TodoForm;
