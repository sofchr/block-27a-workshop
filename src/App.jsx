import { useState } from "react";
import "./App.css";
import "./index.css";
import Transactions from "./components/Transactions";
import PersistentDrawer from "./components/PersistentDrawer";
import BasicButton from "./components/BasicButton";

function App() {
  return (
    <>
      <div className="page-container">
        <PersistentDrawer />
        <Transactions />
        <BasicButton />
      </div>
    </>
  );
}

export default App;
