import { useReducer } from "react";
import { TodoContext } from "@/context/TodoContext";
import { initialState, reducer } from "@/context/reducer";
import { useEffect } from "react";


export default function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>(
        localStorage.setItem("todos",JSON.stringify(state.todos))
    ),[state.todos])
    useEffect(()=>(
        localStorage.setItem("theme",state.theme)
    ),[state.theme])
    useEffect(()=>(
        localStorage.setItem("state",state.state)
    ),[state.state])
    return (
        <TodoContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}