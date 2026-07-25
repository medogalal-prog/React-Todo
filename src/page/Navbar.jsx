import React from "react";
import TodoToggle from "@/components/ui/TodoToggle"
import { useState } from "react";
function Navbar() {
    const [theme,setTheme]=useState();
  return (
    <div className="container border-b-gray-300">
      <header className="flex items-center justify-between ">
        <div className="title">
        <h1 className="font-bold text-2xl">Todo App</h1>
        <p className="text-gray-600 text-sm  mt-2">Manage your daily tasks</p>
        </div>
        <div className="icon">
            <TodoToggle />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
