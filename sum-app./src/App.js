import React from "react";
import { SumProvider } from "./SumContext";
import { InputComponent, DisplayComponent } from "./Components";

function App() {
  return (
    <SumProvider>
      <h1> Sum Two Numbers </h1>
      <div>
        <InputComponent />
        <DisplayComponent />
      </div>
    </SumProvider>
  );
}

export default App;