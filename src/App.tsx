import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import InputSection from "./components/inputSection/InputSection";
import HistoryTable from "./components/historyTable/HistoryTable";

const App = () => {
return (
  <React.Fragment>
    <Header/>
    <Hero/>
    <HistoryTable/>
  </React.Fragment>
  )
};

export default App;