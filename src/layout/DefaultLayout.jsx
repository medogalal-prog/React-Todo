import { Card } from "@/components/ui/card";
import { TodoContext } from "@/context/TodoContext";
import Navbar from "@/page/Navbar";
import TodoForm from "@/page/TodoForm";
import TodoList from "@/page/TodoList";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";

function DefaultLayout() {
  const { state } = useContext(TodoContext);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", state.theme === "dark");
  }, [state.theme]);
  return (
    <>
      <Card className="w-full max-w-xl p-8 shadow-2xl">
        <Navbar />
        <TodoForm />
        <TodoList />
      </Card>
    </>
  );
}

export default DefaultLayout;
