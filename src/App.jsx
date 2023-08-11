import { useState } from "react";
import "./App.css";
// import DataGrid from "./components/DataGrid";
import Transactions from "./components/Transactions";
import PersistentDrawer from "./components/PersistentDrawer";

function App() {
  return (
    <>
      <PersistentDrawer />
      <Transactions />
    </>
  );
}

export default App;
