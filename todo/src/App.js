import React,{useReducer} from 'react';
import './App.css';
import {formReducer, initialState} from './reducers/reducer';
//imports
import TodoForm from './components/todoform';
import {TodoList} from './components/todolist';
import './components/todo.css';
import Todo from './components/todo';




function App() {
  const[state, dispatch] = useReducer(formReducer, initialState)
  // const [state, dispatch] = useReducer(countReducer, {count: 10000})
  return (
    <div className="App">
      <h1>YOUR AMAZING TO DO APPLICATION!!!!</h1>
      <TodoForm/>
      
      {/* <TodoList /> */}
      {/* <Todo/> */}
      {/* <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: 'INCREMENT', amount: 1})}>Add 1</button>
      <button onClick={() => dispatch({type: 'INCREMENT', amount: 5})}>Add 5</button>
      <button onClick={() => dispatch({type: 'DECREMENT', amount: 5})}>Subtract 1</button>
      <button onClick={() => dispatch({type: 'RESET', amount: 0})}>Reset</button> */}
    </div>
  );
}

// function countReducer(state, action){
//   switch(action.type){
//     case "INCREMENT":
//       return {count: state.count + action.amount};
//     case "DECREMENT": 
//       return {count: state.count - 1};
      
//     case 'RESET':
//       return {count: 0};
    
//     default:
//       return state
// }
// }





export default App;