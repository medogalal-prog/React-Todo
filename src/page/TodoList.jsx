import TodoEmpty from "@/components/TodoEmpty";
import TodoItem from "@/components/ui/TodoItem";
import { TodoContext } from "@/context/TodoContext";
import React from "react";
import { useContext } from "react";
import { AnimatePresence } from "motion/react";
function TodoList() {
  const { state,dispatch } = useContext(TodoContext);
  if (state.todos.length === 0) {
    return <TodoEmpty />;
  }
  return <div>
    <div className="space-y-4">
      <AnimatePresence>
        {state.todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo}/>
        ))} 
        </AnimatePresence>   
    </div>
  </div>;
}

export default TodoList;
