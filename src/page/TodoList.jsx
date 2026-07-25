import TodoEmpty from "@/components/TodoEmpty";
import TodoItem from "@/components/ui/TodoItem";
import { TodoContext } from "@/context/TodoContext";
import React from "react";
import { useContext } from "react";

function TodoList() {
  const { state } = useContext(TodoContext);
  if (state.todos.length === 0) {
    return <TodoEmpty />;
  }
  return <div>
    <div className="space-y-4">
        {state.todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo}/>
        ))}    
    </div>
  </div>;
}

export default TodoList;
