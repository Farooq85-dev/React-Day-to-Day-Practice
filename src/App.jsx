import React from "react";
import UseContextComp from "./UseContext";
import { UserContextProvider } from "./Context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <UseContextComp />
    </UserContextProvider>
  );
}

export default App;
