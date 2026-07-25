import React from "react";
import { Toaster } from "react-hot-toast";
import DefaultLayout from "@/layout/DefaultLayout";

function App() {
  return (
    <>
      <div className="min-h-screen transition-all duration-300 flex flex-col items-center justify-center p-6">
        <DefaultLayout />
        <span className="mt-5 text-sm text-black dark:text-gray-200">Desined by: <a href="#" className="text-[18px] text-gray-600 hover:text-gray-500">Ahmed Galal</a></span>
      </div>
      <Toaster />
    </>
  );
}

export default App;
