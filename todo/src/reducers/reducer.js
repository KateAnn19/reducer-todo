export const initialState = [
  {
    name: "Wash clothes",
    id: 12345,
    completed: false
  },
  {
    name: "Wash dishes",
    id: 6789,
    completed: false
  },
  {
    name: "Wash sheets and blankets",
    id: 1012131415,
    completed: false
  },
  {
    name: "Bathe Graham",
    id: 2323423235,
    completed: false
  }
];

//state=intialState is setting state to default

export const formReducer = (state, action) => {
  switch (action.type) {
    //spread what's in state already

    case "ADD_TODO":
      //   console.log("*****", "ADD_TODO");
      const newTodo = {
        name: action.payload,
        id: Date.now(),
        completed: false
      };
      //   console.log("!!!!!!!!!!!", newTodo);
      return [...state, newTodo];
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map(name =>
        name.id === action.id ? { ...name, completed: !name.completed } : name
      );
    case "EDIT":
      return state.map(name =>
        name.id === action.id ? { ...name, task: action.newTask } : name
      );

    default:
      return state;
  }
};

//very beginning of a reducer function looks like this:
// export const reducer = (state, action) => {
//     return newState;
// }

//actions
//{type: 'ADD_TODO', task: 'Walk the cat'}
//{type: 'INCREMENT', amount: 3}
//{type: 'CHANGE_THREAT_LEVEL', level: 'red alert'}
