import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import InputSection from "./components/inputSection/InputSection";
import HistoryTable from "./components/historyTable/HistoryTable";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-overall">
      <Header />
      <main className="flex flex-col min-h-[calc(100vh-125px)] ">
        <Hero />
      </main>
      <HistoryTable />    
    </div>
  );
}  

export default App;