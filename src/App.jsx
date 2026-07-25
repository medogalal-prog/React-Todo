import React from "react";
import { Toaster } from "react-hot-toast";
import DefaultLayout from "@/layout/DefaultLayout";

function App() {
  return (
    <>
      <div className="min-h-screen transition-all duration-300 flex items-center justify-center p-6">
        <DefaultLayout />
      </div>
      <Toaster />
    </>
  );
}

export default App;
