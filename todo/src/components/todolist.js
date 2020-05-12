import React, {useReducer} from "react";
import { formReducer, initialState } from "../reducers/reducer";

//imports
import Todo from "./todo";

export const TodoList = props => {
    console.log("%%%", props)
  const [state, dispatch] = useReducer(formReducer, initialState);
  return (
    <div className="todo-list">
      {props.state.map(item => {
        return (
          <Todo
            id={item.id}
            task={item}
            dispatch={props.dispatch}
            //toggleCompleted={props.toggleCompleted}
          />
        );
      })}


    </div>
  );
};
