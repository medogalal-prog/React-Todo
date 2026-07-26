export const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  theme: localStorage.getItem("theme") || "light",
  state:localStorage.getItem("state") || ""
};
export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
        return{
            ...state,
            todos:state.todos.filter((todo)=>todo.id!==action.payload)
        }
    case "UPDATE_TODO":
        return{
            ...state,
            todos:state.todos.map((todo)=>todo.id===action.payload.id ? {...todo,text:action.payload.text}:todo)
        }
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
      case "WORK_THEME":
        return{
          ...state,
          state:state.state==="bg-sky-300 text-sky-600"
        }
        case "STUDY_THEME":
          return{
            ...state,
            state:state.state==="bg-red-300 text-red-600"
          }
        case "PERSONAL_THEME":
          return{
            ...state,
            state:state.state==="bg-gray-300 text-gray-700"
          }
    default:
      return state;
  }
}
