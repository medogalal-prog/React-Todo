export const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  theme: localStorage.getItem("theme") || "light",
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
    default:
      return state;
  }
}
