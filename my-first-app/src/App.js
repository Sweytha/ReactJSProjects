import React, { useState } from "react";
import InputForm from "./InputForm";
import DisplayDetails from "./DisplayDetails";

const App = () => {
  const [userDetails, setUserDetails] = useState(null);

  const handleSubmit = (details) => {
    setUserDetails(details);
  };

  return (
    <div className="App">
      <InputForm onSubmit={handleSubmit} />
      {userDetails && <DisplayDetails details={userDetails} />}
    </div>
  );
};

export default App;
